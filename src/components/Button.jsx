import React from "react"

export const Button = ({text,className,component = 'button',href,iconPath,...props}) => {
    return (
        React.createElement(component, {
            className: `${className} cta-wrapper`,
            href,
            children: (
                <div className="cta-button group">
                    <div className="bg-circle"/>
                    <p className="text">
                        {text}
                    </p>
                    <div className="arrow-wrapper">
                        <img src={iconPath} alt="arrow" />
                    </div>
                </div>
            ),
            ...props
        })
    )
}