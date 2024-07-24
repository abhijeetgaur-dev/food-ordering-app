import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"
          className="header-logo"
        ></img>
      </div>
      <div className="navbar">
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resData = [
    {
      "info": {
        "id": "576290",
        "name": "Chinese Wok",
        "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
        "locality": "Indirapuram",
        "areaName": "Ghaziabad",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Chinese",
          "Asian",
          "Tibetan",
          "Desserts"
        ],
        "avgRating": 4.2,
        "parentId": "61955",
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 47,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-07-24 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹149"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/chinese-wok-indirapuram-ghaziabad-noida-1-576290",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "521118",
        "name": "Wow! Momo",
        "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
        "locality": "Indirapuram",
        "areaName": "Ghaziabad",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Tibetan",
          "Healthy Food",
          "Asian",
          "Chinese",
          "Snacks",
          "Continental",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "1776",
        "avgRatingString": "4.3",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 43,
          "lastMileTravel": 2.7,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "2.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-07-25 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Momos.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Momos.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/wow-momo-indirapuram-ghaziabad-noida-1-521118",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "461173",
        "name": "Khadak Singh Da Dhaba",
        "cloudinaryImageId": "8144bf37947c161953f656308d1bfc30",
        "locality": "Rajendra Nagar",
        "areaName": "Rajendra Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Mughlai",
          "Tandoor",
          "Indian",
          "Snacks"
        ],
        "avgRating": 4.1,
        "parentId": "13170",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 6.6,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "6.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-07-25 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
              "description": "Delivery!"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                  }
                },
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.0",
            "ratingCount": "100+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/khadak-singh-da-dhaba-rajendra-nagar-noida-1-461173",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "576304",
        "name": "Big Bowl",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_576304.JPG",
        "locality": "Indirapuram",
        "areaName": "Ghaziabad",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Chinese"
        ],
        "avgRating": 4.3,
        "parentId": "434792",
        "avgRatingString": "4.3",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 42,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-07-24 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹169"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/big-bowl-indirapuram-ghaziabad-noida-1-576304",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "254024",
        "name": "McDonald's",
        "cloudinaryImageId": "535fc9f9c135f7982317bbb6a64a1ffc",
        "locality": "Indirapuram",
        "areaName": "Ghaziabad",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "American"
        ],
        "avgRating": 4.6,
        "parentId": "630",
        "avgRatingString": "4.6",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 1.4,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "1.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-07-24 23:45:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/mcdonalds-indirapuram-ghaziabad-noida-1-254024",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "189164",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4c140390-e252-47b2-a5aa-6d199918bb10_189164.JPG",
        "locality": "Jaipuria Sunrise Green",
        "areaName": "Indirapuram",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.5,
        "parentId": "166",
        "avgRatingString": "4.5",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 40,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-07-25 03:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/burger-king-jaipuria-sunrise-green-indirapuram-noida-1-189164",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "51293",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/1b92e544-fce7-45ac-941a-50092e3037a5_51293.JPG",
        "locality": "Subhash Nagar",
        "areaName": "Indirapuram",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Burgers",
          "Fast Food",
          "Rolls & Wraps"
        ],
        "avgRating": 4.3,
        "parentId": "547",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 2,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-07-25 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "1K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kfc-subhash-nagar-indirapuram-noida-1-51293",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "323615",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/05cc1a9e-cbaf-45c1-9ffa-6c33f820b7c0_323615.jpg",
        "locality": "Ahinsha Khand",
        "areaName": "Indirapuram",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4.2,
        "parentId": "721",
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-07-25 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹189"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/pizza-hut-ahinsha-khand-indirapuram-noida-1-323615",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "100503",
        "name": "Subway",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/9/53d8c199-67cc-4879-841c-2e6676d6ff15_100503.JPG",
        "locality": "Sector 8",
        "areaName": "Indirapuram",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Healthy Food",
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "2",
        "avgRatingString": "4.3",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 1.7,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "1.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-07-24 23:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹199"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.1",
            "ratingCount": "100+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/subway-sector-8-indirapuram-noida-1-100503",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "622133",
        "name": "MOJO Pizza - 2X Toppings",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/2d5dfc2f-3392-4f14-af5e-c944f5a640c0_622133.JPG",
        "locality": "Gyan Khand II",
        "areaName": "Indirapuram",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Fast Food",
          "Desserts"
        ],
        "avgRating": 4.7,
        "parentId": "11329",
        "avgRatingString": "4.7",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-30 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-07-25 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/mojo-pizza-2x-toppings-gyan-khand-ii-indirapuram-noida-1-622133",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "750327",
        "name": "Daily Kitchen - Homely Meals",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750327.JPG",
        "locality": "Sucheta Kriplani Marg",
        "areaName": "Indirapuram",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Home Food",
          "Indian",
          "North Indian",
          "Thalis"
        ],
        "avgRating": 4.4,
        "parentId": "444382",
        "avgRatingString": "4.4",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-30 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-07-25 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/daily-kitchen-homely-meals-sucheta-kriplani-marg-indirapuram-noida-1-750327",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "38929",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
        "locality": "Indirapuram",
        "areaName": "Ghaziabad",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "2456",
        "avgRatingString": "4.4",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 1.1,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-07-24 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-indirapuram-ghaziabad-noida-1-38929",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "706465",
        "name": "Louis Burger",
        "cloudinaryImageId": "18bb368493aac7f51c173b3c224aaa69",
        "locality": "One Square Mall",
        "areaName": "Indirapuram",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Burgers",
          "American",
          "Fast Food"
        ],
        "avgRating": 4.4,
        "parentId": "22485",
        "avgRatingString": "4.4",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 0.4,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "0.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-07-25 04:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/louis-burger-one-square-mall-indirapuram-noida-1-706465",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "49185",
        "name": "Baskin Robbins - Ice Cream Desserts",
        "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
        "locality": "Indirapuram Habitat Centre",
        "areaName": "Indirapuram",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "5588",
        "avgRatingString": "4.7",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-07-25 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
              "description": "Delivery!"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                  }
                },
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-habitat-centre-indirapuram-noida-1-49185",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "550227",
        "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/f499f2a4-c142-4421-bc92-eafaf4fc5820_550227.JPG",
        "locality": "SECTOR - 15 VASUNDHARA ",
        "areaName": "Ghaziabad Nagar ",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Desserts",
          "Ice Cream",
          "Ice Cream Cakes"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "582",
        "avgRatingString": "4.4",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-07-24 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-sector-15-vasundhara-ghaziabad-nagar-noida-1-550227",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "314434",
        "name": "Natural Ice Cream",
        "cloudinaryImageId": "jhpmorzoavfvuktmgzkj",
        "locality": "Vasundhara Colony",
        "areaName": "Ghaziabad",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "2093",
        "avgRatingString": "4.5",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-07-24 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
              "description": "Delivery!"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                  }
                },
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/natural-ice-cream-vasundhara-colony-ghaziabad-noida-1-314434",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "62963",
        "name": "LunchBox - Meals and Thalis",
        "cloudinaryImageId": "4edcfc66d91018d69894941ebb3c8d16",
        "locality": "Vasundhara Colony",
        "areaName": "Ghaziabad",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Punjabi",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.2,
        "parentId": "4925",
        "avgRatingString": "4.2",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 53,
          "lastMileTravel": 2.9,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "2.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-07-24 23:59:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹159"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-vasundhara-colony-ghaziabad-noida-1-62963",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "25819",
        "name": "Faasos - Wraps, Rolls & Shawarma",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/5/17236b2e-bfa3-490b-9cce-8a15194a6cf6_25819.jpg",
        "locality": "Vasundhara Colony",
        "areaName": "Ghaziabad",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "21809",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 38,
          "lastMileTravel": 2.9,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "2.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-07-24 23:59:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-vasundhara-colony-ghaziabad-noida-1-25819",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "390170",
        "name": "NH1 Bowls - Highway To North",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/2ea0f794-f01a-4e93-8acf-107acc58a183_390170.JPG",
        "locality": "Indirapuram",
        "areaName": "Ghaziabad",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "Punjabi",
          "Home Food"
        ],
        "avgRating": 4.6,
        "parentId": "22452",
        "avgRatingString": "4.6",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "15-25 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-07-25 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/nh1-bowls-highway-to-north-indirapuram-ghaziabad-noida-1-390170",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "643765",
        "name": "WeFit - Protein Bowls, Salads & Sandwiches",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/23/db0d5750-c352-409e-9743-c4deb10c863d_643765.JPG",
        "locality": "Gyan Khand II",
        "areaName": "Indrapuram",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Healthy Food",
          "Salads",
          "Keto",
          "Snacks"
        ],
        "avgRating": 4.6,
        "parentId": "355285",
        "avgRatingString": "4.6",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-30 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-07-25 02:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "brand",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/wefit-protein-bowls-salads-and-sandwiches-gyan-khand-ii-indrapuram-noida-1-643765",
        "type": "WEBLINK"
      }
    }
]

const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card">
      <img
        className="card-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}
      ></img>
      <h3>{resData.info.name}</h3>
      <h5>{resData.info.cuisines.join(", ")}</h5>
      <h5>{resData.info.avgRating}</h5>
      <h5>{resData.info.sla.slaString}</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resData.map((restaurant) => (
            <RestaurantCard key ={restaurant.info.id} resData = {restaurant} />
        ) )}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
