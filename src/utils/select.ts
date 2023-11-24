/* eslint-disable @typescript-eslint/no-explicit-any */
// objeto de estilizado do field Select do react-select
export const selectStyles = {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: (baseStyles: any, state: any) => ({
        ...baseStyles,
        border: "none",
        backgroundColor: state.isFocused ? 'var(--color-bg-white)' : 'none',       
        boxShadow: "none",
        "&:hover": {
            border: "none"           
        },
        minHeight:"40px",
        maxHeight: "auto",      
    }),
    placeholder: (baseStyles: any) => ({
        ...baseStyles,
        color: 'var(--color-font-placeholder)'
    }),
    indicatorSeparator: (baseStyles: any) => ({
        ...baseStyles,
        display: "none",
    }),
    option: (baseStyles: any, state: any) => ({
        ...baseStyles,
        color: "var(--color-font-tertiary)",       
        backgroundColor: state.isSelected ? "var(--color-btn-blue)" : "none",
        "&:hover": {
            backgroundColor: "var(--color-bg-blue-50)"
        },                    
    }),   
   
};