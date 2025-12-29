export const subscriptionCategories = {
    Entatainment: "Entatainment",
    Music: "Music",
    Education: "Education",
    Productivity: "Productivity",
    Finance: "Finance",
    Health: "Health",
    Other: "Other",
};
export const subscriptionReference = {
    Manual: "manual",
    Gmail: "gmail",
};
export const subscriptionStatus = {
    Active: "Active",
    Cancelled: "Cancelled",
    Expired: "Expired",
};

export const categoryValues = Object.values(subscriptionCategories);
export const sourceValues = Object.values(subscriptionReference);
export const statusValues = Object.values.apply(subscriptionStatus);