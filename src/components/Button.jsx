import React from "react"

export const Button = ({text, className, component = 'button', href, iconPath, loading = false, ...props}) => {
    return (
        React.createElement(component, {
            className: `${className} cta-wrapper`,
            href,
            disabled: loading,
            children: (
                <div className="cta-button group relative">
                    <div className="bg-circle"/>
                    {loading ? (
                        <div className="w-6 h-6 border-4 border-white/20 border-t-white/90 rounded-full animate-spin"/>
                    ) : (
                        <>
                            <p className="text">
                                {text}
                            </p>
                            <div className="arrow-wrapper">
                                <img src={iconPath} alt="arrow" />
                            </div>
                        </>
                    )}
                </div>
            ),
            ...props
        })
    )
}