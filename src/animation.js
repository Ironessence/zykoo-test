export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            
        },
        
    },
    exit: {
        opacity: 0,
        y: 300,
        transition: {
            duration: 0.5,
            
        },
    },
};

export const titleAnimation = {
    hidden: {
        y: 200,
    },
    show: {
        y: 0,
        transition: {
            duration: 0.6, ease: 'easeOut',
        }
    },
}

export const fade = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {ease: 'easeOut', duration: 0.8},
    }
}

export const photoAnim = {
    hidden: {scale: 1.5, opacity: 0},
    show: {scale: 1, opacity: 1, transition: {
        ease: 'easeOut', duration: 0.8
    }}
}

export const lineAnim = {
    hidden: {
        width: '0%',
    },
    show: {
        width: '100%',
        transition: {duration: 1}
    }
}

export const scrollReveal = {
    hidden: {opacity: 0, scale: 1.2},
    show: {opacity: 1, scale: 1, transition: {duration: 1,}}
}