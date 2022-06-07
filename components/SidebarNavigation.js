import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChartPie,
  faGears,
  faMapMarked,
  faMessage,
  faPlusCircle,
  faReceipt,
  faWrench,
} from '@fortawesome/free-solid-svg-icons'

function SidebarNavigation() {
  return (
    <nav className="bg-slate-800 w-16 sm:w-60">
      <ul className="ml-4  text-[#ccc] border-l border-gray-500 flex flex-col h-full">
        <li className="mt-6 hover:text-[#f1f1f1] hover:border-l hover:border-white hover:ml-[-1px] pl-6 cursor-pointer">
          <Link href="/dashboard" className="">
            <div>
              <FontAwesomeIcon icon={faChartPie} className="pr-3" />
              Dashboard
            </div>
          </Link>
        </li>
        <li className="mt-8 hover:text-[#f1f1f1] hover:border-l hover:border-white hover:ml-[-1px] pl-6 cursor-pointer">
          <Link href="/jobs" className="py-2 px-4">
            <div>
              <FontAwesomeIcon icon={faWrench} className="pr-3" />
              Jobs
            </div>
          </Link>
        </li>
        <li className="mt-4 hover:text-[#f1f1f1] hover:border-l hover:border-white hover:ml-[-1px] pl-8 cursor-pointer">
          <Link href="/jobs/add" className="py-2 px-4">
            <div>
              <FontAwesomeIcon icon={faPlusCircle} className="pr-3" />
              Add Job
            </div>
          </Link>
        </li>{' '}
        <li className="mt-4 hover:text-[#f1f1f1] hover:border-l hover:border-white hover:ml-[-1px] pl-8 cursor-pointer">
          <Link href="/jobs/map" className="py-2 px-4">
            <div>
              <FontAwesomeIcon icon={faMapMarked} className="pr-3" />
              Job Map
            </div>
          </Link>
        </li>
        <li className="mt-8 hover:text-[#f1f1f1] hover:border-l hover:border-white hover:ml-[-1px] pl-6 cursor-pointer">
          <Link href="/quotes" className="py-2 px-4">
            <div>
              <FontAwesomeIcon icon={faReceipt} className="pr-3" />
              Quotes
            </div>
          </Link>
        </li>
        <li className="mt-4 hover:text-[#f1f1f1] hover:border-l hover:border-white hover:ml-[-1px] pl-8 cursor-pointer">
          <Link href="/quotes/add" className="py-2 px-4">
            <div>
              <FontAwesomeIcon icon={faPlusCircle} className="pr-3" />
              Add Quote
            </div>
          </Link>
        </li>
        <li className="mt-8 hover:text-[#f1f1f1] hover:border-l hover:border-white hover:ml-[-1px] pl-6 cursor-pointer">
          <Link href="/messages" className="py-2 px-4">
            <div>
              <FontAwesomeIcon icon={faMessage} className="pr-3" />
              Messages
            </div>
          </Link>
        </li>
        <li className="mt-auto my-4 hover:text-[#f1f1f1] hover:border-l hover:border-white hover:ml-[-1px] pl-6 cursor-pointer">
          <Link href="/preferences" className="py-2 px-4">
            <div>
              <FontAwesomeIcon icon={faGears} className="pr-3" />
              Preferences
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default SidebarNavigation
