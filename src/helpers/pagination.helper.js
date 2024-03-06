

const getPaginatedResponse = (data, current_page, limit, total) => {
    const totalPages = Math.ceil(total / limit);
    const currentPage = parseInt(current_page);
    const previousPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    return {
        page_data: data,
        page_information: {
            total_data: total,
            last_page: totalPages,
            current_page: currentPage,
            previous_page: previousPage,
            next_page: nextPage
        }
    }
}
export { getPaginatedResponse };
