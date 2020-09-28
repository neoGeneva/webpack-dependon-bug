module.exports = env => {
    return {
        mode: "development",
        entry: {
            "module1": "./module1.js",
            "module3": {
                import: "./module3.js",
                dependOn: ["module1", "module4"]
            },
            "module4": "./module4.js"
        }
    };
};
