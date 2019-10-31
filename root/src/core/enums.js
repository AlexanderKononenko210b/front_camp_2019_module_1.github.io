const enums = {
    categories: [
        "business",
        "entertainment",
        "health",
        "science",
        "sports",
        "technology"
    ],
    countries: [
        {
            name: "United States",
            alias: "us"
        },
        {
            name: "Argentina",
            alias: "ar"
        },
        {
            name: "Australia",
            alias: "au"
        },
        {
            name: "Canada",
            alias: "ca"
        },
        {
            name: "Germany",
            alias: "de"
        }
    ],
    errors: [
        {
            name: "badBinaryDomainRequest",
            message: "Test error: The binary domain request is invalid."
        },
        {
            name: "invalid",
            message: "Test error: The request failed because it contained an invalid value. The value could be a parameter value, a header value, or a property value."
        },
        {
            name: "invalidHeader",
            message: "Test error: The request failed because it contained an invalid header."
        }
    ]
};

export default enums;
