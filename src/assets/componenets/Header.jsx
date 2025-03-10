import React, { Fragment } from 'react'

function Header({ activetab, setActivetab, theme }) {
    const navitem = [
        { id: "home", label: "home" },
        { id: "menue", label: "menue" },      
        { id: "blog", label: "blog" },
        { id: "contact", label: "contact" },
        {id:"login",label:"login"},
    ];

    const headerstyle = {
        backgroundColor: theme === "dark" ? "#333" : "#f2f2f2",
        color: theme === "dark" ? "#fff" : "#000",
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        allignItems: "center",
        borderBottom: `1px solid ${theme === "light" ? "#ddd" : "#444"}`,
    };
    const navstyle = {
        display: "flex",
        gap: "10px"
    }



    return (
        <Fragment>
            <header style={headerstyle}>
                <nav>
                    <ul style={navstyle}>
                        {navitem.map((item)=>(
                            <li key={item.id} style={{
                                cursor: "pointer",
                                padding:"5px 10px",
                                color:activetab === item.id ? "white" : "inherit",
                                backgroundColor:activetab === item.id ? "#646cff" : "transparent",
                                listStyle:"none",

                            }}
                            onClick={()=>setActivetab(item.id)}>
                                {item.label}
                            
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </Fragment>
    )
}

export default Header