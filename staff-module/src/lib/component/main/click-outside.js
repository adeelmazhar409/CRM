// @ts-nocheck
export function clickOutside(node, ignore) {
    const handleClick = (event) => {
        const target = event.target
        if (!event.target || (ignore && target.closest(ignore))) {
            return
        }
        if (node && !node.contains(target) && !event.defaultPrevented) {
            node.dispatchEvent(new CustomEvent('click_outside'))
        }
    }

    document.addEventListener('click', handleClick, true)

    return {
        destroy() {
            document.removeEventListener('click', handleClick, true)
        },
    }
}
