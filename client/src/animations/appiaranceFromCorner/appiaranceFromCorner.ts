type Entry = {
    isIntersecting: boolean;
    target: Element;
  }[];

const setAppearanceFromCorner = () => {
    const onEntry = (entry: Entry) => {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            }
        });
    }

    const options = {
        threshold: [0.5]
    };

    const observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-appiaranceFromCornerRight');

    for (const elm of elements) {
        observer.observe(elm);
    }

    elements = document.querySelectorAll('.element-appiaranceFromCornerLeft');

    for (const elm of elements) {
        observer.observe(elm);
    }
}

export default setAppearanceFromCorner;