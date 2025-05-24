const parseIsFavourite = (isFavourite) => {
    if (typeof isFavourite === 'string') {
        if (isFavourite.toLowerCase() === 'true') return true;
        if (isFavourite.toLowerCase() === 'false') return false;
    };

    if (typeof isFavourite === 'boolean') {
        return isFavourite;
    };
    return undefined;
};

export const parseFilterParams = (query) => {
    const { isFavourite, type } = query;

    const filter = {};

    const parsedIsFauvorite = parseIsFavourite(isFavourite);

    if (typeof parsedIsFauvorite === 'boolean') {
        filter.isFavourite = parsedIsFauvorite;
    }

    if (typeof type === 'string' && type.trim()) {
        filter.contactType = type.trim();
    }

    return filter;
};
