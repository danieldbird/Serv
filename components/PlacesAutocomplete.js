import usePlacesAutocomplete, { getGeocode, getLatLng, getDetails } from 'use-places-autocomplete'
import useOnclickOutside from 'react-cool-onclickoutside'

export default function PlacesAutocomplete(props) {
  const { setAddress } = props
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
      location: new window.google.maps.LatLng(-36.8509, 174.7645),
      radius: 5000,
    },
    debounce: 1000,
  })
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions()
  })

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value)
  }

  const handleSelect = (data) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter to "false"
    getDetails({ placeId: data.place_id })
      .then((test) => {
        setAddress(test)
      })
      .catch(() => {
        console.log('There was an error.')
      })
    // console.log(data.place_id)
    setValue(data.description, false)
    clearSuggestions()
    // console.log(data.description)
    // console.log(data.suggestions)
    // Get latitude and longitude via utility functions
    // getGeocode({ address: data.description })
    //   .then((results) => getLatLng(results[0]))
    //   .then(({ lat, lng }) => {
    //     console.log('📍 Coordinates: ', { lat, lng })
    //   })
    //   .catch((error) => {
    //     console.log('😱 Error: ', error)
    //   })
    // // console.log(data)
    // setAddress(data)
  }

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion

      return (
        <li
          key={place_id}
          onClick={handleSelect(suggestion)}
          className="hover:bg-green-100 cursor-pointer rounded px-2 py-1"
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      )
    })

  return (
    <div ref={ref}>
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Search address.."
        className="w-1/2 py-2 px-4 rounded my-2"
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === 'OK' && <ul className="absolute bg-white rounded p-2">{renderSuggestions()}</ul>}
    </div>
  )
}
