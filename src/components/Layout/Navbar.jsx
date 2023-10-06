import React from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../../static/data'
import styles from '../../styles/styles'

const Navbar = ({active}) => {
  return (
    <div dir='rtl' className={` 800px:${styles.noramlFlex}`}>
         {
            navItems && navItems.map((i,index) => (
                <div className="flex">
                    <Link to={i.url}
                    className={`${active === index + 1 ? " 800px:bg-red-700  800px:border-b-red-200" : "800px:bg-red-600 800px:border-b-red-600"}   font-[500] px-6 cursor-pointer} 800px:text-white 800px:hover:bg-red-800 duration-300 p-3 800px:hover:border-b-2 hover:border-b-red-200 800px:border-b-2`}
                    >
                    {i.title}
                    </Link>
                </div>
            ))
         }
    </div>
  )
}

export default Navbar