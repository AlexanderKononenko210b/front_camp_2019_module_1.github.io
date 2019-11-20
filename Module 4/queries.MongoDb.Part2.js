// 1.1 task
db.airlines.aggregate([
    {
        $group: {
            _id: "$class",
            total: { $sum: 1 },
        }
    },
    {
        $project: {
            _id: 0,
            class: "$_id",
            total: 1
        }
    }
]);

// 1.2 task
db.airlines.aggregate([
    {
        $match: {
            destCountry: {
                $ne: "United States"
            }
        }
    },
    {
        $group: {
            _id: {
                country: "$destCountry",
                city: "$destCity"
            },
            avgPassengers: { 
                $avg: "$passengers" 
            }
        }
    },
    {
        $sort: {
            avgPassengers: -1
        }
    },
    {
        $limit: 3
    },
    {
        $project: {
            _id: 0,
            city: "$_id.city",
            avgPassengers: 1
        }
    }
])

// 1.3 task
db.airlines.aggregate([
    {
        $match: {
            destCountry: "Latvia"
        }
    },
    {
        $group: {
            _id: "$destCountry",
            carriers: {
                $addToSet: "$carrier"
            }
        }
    }
])

// 1.4 task
db.airlines.aggregate([
    {
        $match: {
            originCountry: "United States",
            destCountry: {
                $in: [
                    "Greece",
                    "Italy",
                    "Spain"
                ]
            }
        }
    },
    {
        $group: {
            _id: "$carrier",
            total: {
                $sum: "$passengers"
            }
        }
    },
    {
        $sort: {
            total: -1
        }
    },
    {
        $skip: 3
    },
    {
        $limit: 7
    }
])

// 1.5 task
db.airlines.aggregate([
    {
        $match: {
            originCountry: "United States"
        }
    },
    {
        $group: {
            _id: {
                city: "$originCity",
                state: "$originState"
            },
            totalPassengers: { $sum: "$passengers"}
        }
    },
    {
        $sort: {
            totalPassengers: -1
        }
    },
    {
        $group: {
            _id: "$_id.state",
            totalPassengers: { 
                $max: "$totalPassengers"
            },
            city: {
                $first: "$_id.city"
            }
        }
    },
    {
        $sort: {
            "_id": 1
        }
    },
    {
        $limit: 5
    },
    {
        $project: {
            _id: 0,
            totalPassengers: "$totalPassengers",
            location: {
                state: "$_id",
                city: "$city"
            }
        }
    }
])

// 2.1 task
db.enron.aggregate([
    {
        $unwind: "$headers.To"
    },
    {
        $group: {
            _id: "$_id",
            from: { 
                $first: "$headers.From"
            },
            to: {
                $addToSet: "$headers.To"
            }
        }
    },
    {
        $unwind: "$to"
    },
    {
        $group: {
            _id: {
                from: "$from",
                to: "$to"
            },
            total: {
                $sum: 1
            }
        }
    },
    {
        $sort: {
            total: -1
        }
    },
    {
        $limit: 1
    }
])

// check
db.enron.aggregate([
    {
        $unwind: "$headers.To"
    },
    {
        $group: {
            _id: "$_id",
            from: { 
                $first: "$headers.From"
            },
            to: {
                $addToSet: "$headers.To"
            }
        }
    },
    {
        $unwind: "$to"
    },
    {
        $group: {
            _id: {
                from: "$from",
                to: "$to"
            },
            total: {
                $sum: 1
            }
        }
    },
    {
        $project: {
            _id: 0,
            from: "$_id.from",
            to: "$_id.to",
            total: "$total"
        }
    },
    {
        $match: {
            from: "phillip.love@enron.com",
            to: "sladana-anna.kulic@enron.com"
        }
    }
])

