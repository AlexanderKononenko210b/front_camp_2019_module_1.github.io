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
                destCity: "$destCity"
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
            avgPassengers: 1,
            city: "$_id"
        }
    }
])

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
                $max: "$passengers"
            }
        }
    },
    {
        $sort: {
            total: -1
        }
    },
    {
        $limit: 10
    },
    {
        $skip: 3
    }
])

db.airlines.aggregate([
    {
        $match: {
            originCountry: "United States"
        }
    },
    {
        $group: {
            _id: {
                originCity: "$originCity",
                originState: "$originState"
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
            _id: {
                originState: "$_id.originState"
            },
            totalPassengers: { 
                $max: "$totalPassengers"
            },
            originCity: {
                $first: "$_id.originCity"
            }
        }
    },
    {
        $sort: {
            "_id.originState": 1
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
                state: "$_id.originState",
                city: "$originCity"
            }
        }
    }
])

db.enron.aggregate([
    {
        $unwind: "$headers.To"
    },
    {
        $project: {
            "headers.From": 1,
            "headers.To": 1,
            _id: 0
        }
    },
    {
        $group: {
            _id: {
                sender: "$headers.From",
                recipient: "$headers.To",
            },
            countEmail: { $sum: 1 }
        }
    },
    {
        $sort: {
            countEmail: -1
        }
    },
    {
        $limit: 1
    },
    {
        $project: {
            _id: 0,
            sender: "$_id.sender",
            recipient: "$_id.recipient",
            countEmail: "$countEmail"
        }
    }
])

db.enron.aggregate([
    {
        $unwind: "$headers.To"
    },
    {
        $project: {
            "headers.From": 1,
            "headers.To": 1,
            _id: 0
        }
    },
    {
        $group: {
            _id: {
                sender: "$headers.From",
                recipient: "$headers.To",
            },
            countEmail: { $sum: 1 }
        }
    },
    {
        $project: {
            _id: 0,
            sender: "$_id.sender",
            recipient: "$_id.recipient",
            countEmail: "$countEmail"
        }
    },
    {
        $match: {
            sender: "phillip.love@enron.com",
            recipient: "sladana-anna.kulic@enron.com"
        }
    }
])


