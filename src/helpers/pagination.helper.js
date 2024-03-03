// Utility functions for paginating user lists

const getPaginationMetadata = ({ page, limit }) => {
    const startIndex = (parseInt(page) - 1) * parseInt(limit) || 0;
    const endIndex = startIndex + parseInt(limit) || 5;
    return { startIndex, endIndex };
}

const getPaginatedResponse = (data, page, limit, total) => {
console.log(total)
    return {
        page_data: data,
        page_information: {
            total_data: total,
            last_page: Math.ceil(total / limit),
            current_page: page,
            previous_page: 0 + (page - 1),
            next_page: page < Math.ceil(total / limit) ? page + 1 : 0
        }
    }
}

export { getPaginationMetadata, getPaginatedResponse };
