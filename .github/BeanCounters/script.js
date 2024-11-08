function getUniqueBeanTypes(counters) {
    const beanTypes = [];
    counters.forEach(counter => {
        if (!beanTypes.includes(counter.bean)) {
            beanTypes.push(counter.bean);
        }
    });
    return beanTypes;
}

function sortCountersByName(counters) {
    return counters.slice().sort((a, b) => a.name.localeCompare(b.name));
}

function filterCountersByType(counters, type) {
    return counters.filter(counter => counter.bean === type);
}

function getTotalBeans(counters) {
    return counters.reduce((total, counter) => total + counter.count, 0);
}

function displayBeanCounters(counters) {
    const content = document.getElementById('content');
    const uniqueTypes = getUniqueBeanTypes(counters);

    uniqueTypes.forEach(type => {
        const filteredCounters = filterCountersByType(counters, type);
        const totalBeans = getTotalBeans(filteredCounters);

        const section = document.createElement('section');
        const heading = document.createElement('h2');
        heading.textContent = `${type} - Total Beans: ${totalBeans}`;
        section.appendChild(heading);

        const list = document.createElement('ol');
        filteredCounters.forEach(counter => {
            const listItem = document.createElement('li');
            listItem.textContent = `${counter.name}: ${counter.count} beans`;
            list.appendChild(listItem);
        });
        section.appendChild(list);
        content.appendChild(section);
    });
}

const sortedCounters = sortCountersByName(counters);
displayBeanCounters(sortedCounters);