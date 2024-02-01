document.addEventListener('alpine:init', () => {
    Alpine.store('pages', {
        current: 'about_me',
        items: [
            {
                name: "about_me",
                label: "about",
                toggle: selectPage,
                getLabel: function() {
                    return Alpine.store('pages').current == this.name ? capitalize(this.label) : this.label;
                },
            },
            {
                name: "projects",
                label: "projects",
                toggle: selectPage,
                getLabel: function() {
                    return Alpine.store('pages').current == this.name ? capitalize(this.label) : this.label;
                },
            },
            {
                name: "contact",
                label: "contact",
                toggle: selectPage,
                getLabel: function() {
                    return Alpine.store('pages').current == this.name ? capitalize(this.label) : this.label;
                },
            }
        ]
    });

    Alpine.store('scroll', {
        valueY: 0
    });

    window.addEventListener("scroll", () => {
        Alpine.store('scroll').valueY = window.scrollY;
    });

    function selectPage(name) {
        Alpine.store('pages').current = name;
        window.location.href = "#" + name;
    }
})

function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1)
}