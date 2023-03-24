if (!title) response.errors.push('Title is required');
    if (!body) response.errors.push('Body is required');
    if (title && title.length <= 3)
        response.errors.push('Title must be at least 3 characters');
    if (body && body.length <= 10)
        response.errors.push('Body must be at least 10 characters');

    if (response.errors.length === 0) {


        const sanitize = (str) => {
            let temp = str.trim();
            temp = validator.stripLow(temp);
            temp = validator.escape(temp);
            return temp;
        };
        if (title) sanitizedTitle = sanitize(title);
        if (body) sanitizedBody = sanitize(body);
    }