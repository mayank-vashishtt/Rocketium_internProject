const axios = require('axios');

const getData = async (req, res) => {
    try {
        const response = await axios.get(process.env.DATA_URL);
        let data = response.data;

        console.log("Original Data:", data);  // Log the original data

        // Filtering
        const { filterKey, filterValue, sortKey, sortOrder } = req.query;
        console.log("Query Params:", req.query);  // Log the query parameters

        if (filterKey && filterValue) {
            data = data.filter(item => item[filterKey] && item[filterKey] == filterValue);
            console.log("Filtered Data:", data);  // Log the filtered data
        }

        // Sorting
        if (sortKey) {
            data.sort((a, b) => {
                if (sortOrder === 'desc') {
                    return (b[sortKey] > a[sortKey]) ? 1 : ((b[sortKey] < a[sortKey]) ? -1 : 0);
                }
                return (a[sortKey] > b[sortKey]) ? 1 : ((a[sortKey] < b[sortKey]) ? -1 : 0);
            });
            console.log("Sorted Data:", data);  // Log the sorted data
        }

        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { getData };
