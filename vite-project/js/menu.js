const Cars = [
    {
        "price": 10000,
        "model": "Civic",
        "features": ["Bluetooth", "Backup Camera", "Lane Departure Warning"],
        "brand": "Honda",
        "img": "https://images.unsplash.com/photo-1612692165005-d22dc8db608e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9uZGElMjBjaXZpY3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        "price": 15000,
        "model": "Accord",
        "features": ["Apple CarPlay", "Android Auto", "Blind Spot Monitoring"],
        "brand": "Honda",
        "img": "https://images.unsplash.com/photo-1614220654876-8a75c41f7a7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9uZGElMjBhY2NvcmR8ZW58MHx8MHx8fDA%3D"
    },
    {
        "price": 20000,
        "model": "Camry",
        "features": ["Adaptive Cruise Control", "Lane Keeping Assist", "Rear Cross Traffic Alert"],
        "brand": "Toyota",
        "img": "https://images.unsplash.com/photo-1624578571415-09e9b1991929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG95b3RhJTIwY2Ftcnl8ZW58MHx8MHx8fDA%3D"
    },
             {
                "price": 25000,
                "model": "Corolla",
                "features": ["Automatic Emergency Braking", "Lane Departure Warning", "Pedestrian Detection"],
                "brand": "Toyota",
                "img": "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG95b3RhJTIwY29yb2xsYXxlbnwwfHwwfHx8MA%3D%3D"
            },
            {
                "price": 30000,
                "model": "Altima",
                "features": ["Intelligent Forward Collision Warning", "Intelligent Lane Intervention", "Rear Automatic Braking"],
                "brand": "Nissan",
                "img": "https://images.unsplash.com/photo-1575501707067-0e4c7db2a950?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmlzc2FuJTIwYWx0aW1hfGVufDB8fDB8fHww"
            },
            {
                "price": 35000,
                "model": "Maxima",
                "features": ["Intelligent Around View Monitor", "Intelligent Driver Alertness", "Traffic Sign Recognition"],
                "brand": "Nissan",
                "img": "https://images.unsplash.com/photo-1592365559088-225c15dc3f10?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Tmlzc2FuJTIwbWF4aW1hfGVufDB8fDB8fHww"
            },
            {
                "price": 40000,
                "model": "Model 3",
                "features": ["Autopilot", "Full Self-Driving Capability", "Sentry Mode"],
                "brand": "Tesla",
                "img": "https://images.unsplash.com/photo-1585011664466-b7bbe92f34ef?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVzbGElMjBtb2RlbCUyMDN8ZW58MHx8MHx8fDA%3D"
            },
            {
                "price": 45000,
                "model": "Model Y",
                "features": ["Dog Mode", "Summon", "Wireless Phone Charging"],
                "brand": "Tesla",
                "img": "https://images.unsplash.com/photo-1619317222672-9bd411411d63?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVzbGElMjBtb2RlbCUyMHl8ZW58MHx8MHx8fDA%3D"
            },
            {
                "price": 50000,
                "model": "F-Class",
                "features": ["Active Distance Assist DISTRONIC", "Active Lane Keeping Assist", "Evasive Steering Assist"],
                "brand": "Mercedes-Benz",
                "img": "https://images.unsplash.com/photo-1688054004259-4afed16cea8b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBiZW56JTIwZiUyMGNsYXNzfGVufDB8fDB8fHww"
            },
            {
                "price": 55000,
                "model": "E-Class",
                "features": ["Active Brake Assist with Cross-Traffic Function", "Active Blind Spot Assist", "Active Lane Change Assist"],
                "brand": "Mercedes-Benz",
                "img": "https://images.unsplash.com/photo-1652453822986-04f70788b118?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBiZW56JTIwZSUyMGNsYXNzfGVufDB8fDB8fHww"
            },
            {
                "price": 60000,
                "model": "5 Series",
                "features": ["Active Driving Assistant Professional", "Active Cruise Control with Stop & Go", "Lane Departure Warning"],
                "brand": "BMW",
                "img": "https://images.unsplash.com/photo-1652890041546-2de2829c43b5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym13JTIwNSUyMHNlcmllc3xlbnwwfHwwfHx8MA%3D%3D"
            },
            {
                "price": 65000,
                "model": "7 Series",
                "features": ["Active Driving Assistant Professional", "Active Cruise Control with Stop & Go", "Lane Departure Warning"],
                "brand": "BMW",
                "img": "https://images.unsplash.com/photo-1627936354732-ffbe552799d8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym13JTIwNyUyMHNlcmllc3xlbnwwfHwwfHx8MA%3D%3D"
            },
            {
                "price": 70000,
                "model": "A8",
                "features": ["Audi Pre Sense Basic", "Audi Pre Sense Rear", "Audi Side Assist"],
                "brand": "Audi",
                "img": "https://images.unsplash.com/photo-1540066019607-e5f69323a8dc?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXVkaSUyMGE4fGVufDB8fDB8fHww"
            },
            {
                "price": 75000,
                "model": "Q7",
                "features": ["Audi Adaptive Cruise Control with Traffic Jam Assist", "Audi Active Lane Assist", "Audi Pre Sense Rear"],
                "brand": "Audi",
                "img": "https://images.unsplash.com/photo-1532974143451-8162d38a1257?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaSUyMHE3fGVufDB8fDB8fHww"
            },
            {
                "price": 80000,
                "model": "Ghibli",
                "features": ["Adaptive Cruise Control with Stop & Go", "Highway Assist System", "Traffic Sign Recognition"],
                "brand": "Maserati",
                "img": "https://images.unsplash.com/photo-1653417580711-b43c9deb0d64?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFzZXJhdGklMjBnaGlibGl8ZW58MHx8MHx8fDA%3D"
            },
            {
                "price": 85000,
                "model": "Levante",
                "features": ["Adaptive Cruise Control with Stop & Go", "Highway Assist System", "Traffic Sign Recognition"],
                "brand": "Maserati",
                "img": "https://images.unsplash.com/photo-1688744348032-d5a227040730?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFzZXJhdGklMjBsZXZhbnRlfGVufDB8fDB8fHww"
            },
            {
                "price": 90000,
                "model": "Panamera",
                "features": ["Lane Change Assist", "Night Vision Assist", "Porsche InnoDrive"],
                "brand": "Porsche",
                "img": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9yc2NoZSUyMHBhbmFtZXJhfGVufDB8fDB8fHww"
            },
            {
                "price": 95000,
                "model": "Taycan",
                "features": ["Adaptive Cruise Control", "Lane Change Assist", "Night Vision Assist"],
                "brand": "Porsche",
                "img": "https://images.unsplash.com/photo-1618213221550-c32da08997db?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9yc2NoZSUyMHRheWNhbnxlbnwwfHwwfHx8MA%3D%3D"
            },
            {
                "price": 100000,
                "model": "S-Class",
                "features": ["Active Distance Assist DISTRONIC", "Active Lane Keeping Assist", "Evasive Steering Assist"],
                "brand": "Mercedes-Benz",
                "img": "https://images.unsplash.com/photo-1508698947694-5ae81f424907?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVyY2VkZXMlMjBiZW56JTIwcyUyMGNsYXNzfGVufDB8fDB8fHww"
            },
        ];   
        
       



export {Cars};