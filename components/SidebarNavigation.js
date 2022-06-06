import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChartBar,
  faChartPie,
  faGauge,
  faGears,
  faPlusCircle,
  faReceipt,
  faWrench,
} from '@fortawesome/free-solid-svg-icons'

function SidebarNavigation() {
  return (
    <nav className="bg-[#222] w-16 sm:w-60">
      <ul className="my-6 ml-6  text-[#bbb] border-l border-gray-500">
        <li className="my-4 hover:text-[#f1f1f1] hover:border-l hover:border-white hover:ml-[-1px] pl-4 cursor-pointer">
          <Link href="/dashboard" className="">
            <div>
              <FontAwesomeIcon icon={faChartPie} className="pr-3" />
              Dashboard
            </div>
          </Link>
        </li>
        <li className="mt-6 my-4 hover:text-[#f1f1f1] hover:border-l hover:border-white hover:ml-[-1px] pl-4 cursor-pointer">
          <Link href="/jobs" className="py-2 px-4">
            <div>
              <FontAwesomeIcon icon={faWrench} className="pr-3" />
              Jobs
            </div>
          </Link>
        </li>
        <li className="my-4 hover:text-[#f1f1f1] hover:border-l hover:border-white hover:ml-[-1px] pl-8 cursor-pointer">
          <Link href="/jobs/add" className="py-2 px-4">
            <div>
              <FontAwesomeIcon icon={faPlusCircle} className="pr-3" />
              Add Job
            </div>
          </Link>
        </li>
        <li className="mt-6 my-4 hover:text-[#f1f1f1] hover:border-l hover:border-white hover:ml-[-1px] pl-4 cursor-pointer">
          <Link href="/quotes" className="py-2 px-4">
            <div>
              <FontAwesomeIcon icon={faReceipt} className="pr-3" />
              Quotes
            </div>
          </Link>
        </li>
        <li className="my-4 hover:text-[#f1f1f1] hover:border-l hover:border-white hover:ml-[-1px] pl-8 cursor-pointer">
          <Link href="/quotes/add" className="py-2 px-4">
            <div>
              <FontAwesomeIcon icon={faPlusCircle} className="pr-3" />
              Add Quote
            </div>
          </Link>
        </li>
        <li className="mt-6 my-4 hover:text-[#f1f1f1] hover:border-l hover:border-white hover:ml-[-1px] pl-4 cursor-pointer">
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
