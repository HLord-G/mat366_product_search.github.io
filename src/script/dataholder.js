let workdata = {
    storedata:[
        {
            a_storename:"Google Shopping",
            b_quearysearch:"https://www.google.com/search?tbm=shop&q=",
            c_note:"",
            d_tags:[],
            e_id:"062415google",
            f_views:0,
            g_autoopen:false
        },
        {
            a_storename:"Amazon",
            b_quearysearch:"https://www.amazon.com/s?k=",
            c_note:"",
            d_tags:[],
            e_id:"062415amazon",
            f_views:0,
            g_autoopen:false
        },
        {
            a_storename:"eBay",
            b_quearysearch:"https://www.ebay.com/sch/i.html?_nkw=",
            c_note:"",
            d_tags:[],
            e_id:"062415eBay",
            f_views:0,
            g_autoopen:false
        },
        {
            a_storename:"Walmart",
            b_quearysearch:"https://www.walmart.com/search/?query=",
            c_note:"",
            d_tags:[],
            e_id:"062415walmart",
            f_views:0,
            g_autoopen:false
        },
        {
            a_storename:"Target",
            b_quearysearch:"https://www.target.com/s?searchTerm=",
            c_note:"",
            d_tags:[],
            e_id:"062415target",
            f_views:0,
            g_autoopen:false
        },
        {
            a_storename:"Best Buy",
            b_quearysearch:"https://www.bestbuy.com/site/searchpage.jsp?st=",
            c_note:"",
            d_tags:[],
            e_id:"062415bestbuy",
            f_views:0,
            g_autoopen:false
        },
        {
            a_storename:"Macy\'s",
            b_quearysearch:'https://www.macys.com/shop/featured/',
            c_note:"",
            d_tags:[],
            e_id:"062415macys",
            f_views:0,
            g_autoopen:false
        }
    ],
    search_history:[]
  } 




  let temp_search_history = {
    title_search:"",
    store_open:[],
    date:``,
    opentoggle:false
  }


  let temp_infoviews = {
        openclosetoggle:false,
        idholder:null,
        datacatiguria:[
            "Books & E-Books",
            "Electronics",
            "Computers",
            "Smart Home",
            "Art & Crafts",
            "Automotive",
            "Baby",
            "Beauty and Personal Care",
            "Women's Fashion",
            "Men's Fashion",
            "Girl's Fashion",
            "Boy's Fashion",
            "Heath and Household",
            "Home and Kitchen",
            "Industrial and Scientific",
            "Luggage",
            "Movie & Television",
            "Pet Supplies",
            "Software",
            "Sport and Outdoors",
            "Tools & Home Improvement",
            "Toys and Games",
            "Video Games"
        ],
        timp_datacatiguria:[]
  }
  let arrtemp = []