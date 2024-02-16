import React from "react";
import Footer from "../AdminAccess/footer";
import NavBar from "./navbar";
import NavAdmin from "../AdminAccess/navAdmin";

export default function Faq(){
    return(
        <>
        <NavAdmin/>
        <div style={{padding:'20px 20px 20px 20px'}} className="faq">
            <h3 style={{color:'black'}}>FREQUENTLY ASKED QUESTIONS</h3>
            <br></br>
            <div><h3>1) How to search city wise restaurant?</h3>
            <p>
            To search restaurants in particular city is very simple with foodchow. Enter preferred city name in search bar and click on search. All restaurant listed in searched city will be display.
            </p>
            </div>
            <div>
            <h3>
            2) How to search restaurants of different country?</h3>
            <p>
            To discover restaurants of different countries is very easy with foodchow. User can view restaurant of various countries on foodchow. Scroll down welcome page of foodchow and click on the country flag to view restaurant of that particular country.
            </p>
            </div>
            <div>
            <h3>
            3) How to register restaurant on foodchow?</h3>
            <p>
            Anyone can start their restaurant business online within few minutes. Click on Add Your Restaurant from foodchow welcome page. Enter your mail id and receive mail to add your restaurant details. Add whole details and restaurant will be online.
            </p></div>
            <div>
            <h3>
            4) How to search restaurant for particular cuisine?</h3>
            <p>
            On foodchow you can also find restaurant according to your choice of cuisine. Search restaurant list in your city and click on your favourite cuisine from left hand side panel. All restaurants will be listed with your selected cuisine.
            </p></div>
            <div><h3>
            5) How to go on particular restaurant page?</h3>
            <p>
            There are multiple ways to go on particular restaurant page. Search restaurant city wise or cuisine wise and select restaurant from list. Foodchow providing one unique functionality too i.e. unique URL for every restaurant. If restaurant URL on foodchow is known then type URL and directly go to restaurant page.
            </p></div>
            <div><h3>
            6) How to view only non-veg item from restaurant menu?</h3>
            <p>
            Searching your favourite item from whole menu is headache. Foodchow providing solution for this also. If you are interested in only Non-Veg items then view menu of only Non-Veg items. Go to Cuisine page of your selected restaurant and click on Non-Veg.
            </p></div>
            <div><h3>
            7) How to view only Veg item from restaurant menu?</h3>
            <p>

            Searching your favourite item from whole menu is headache. Foodchow providing solution for this also. If you are interested in only Pure Veg items then view menu of only Veg items. Go to Cuisine page of your selected restaurant and click on Pure-Veg.
            </p></div>
            <div><h3>
            8) How to view restaurant details?</h3>
            <p>
            Foodchow providing personal pages for every restaurant to add their details and contents. Customer can view details of restaurant from restaurant page. Go to restaurant page and click on About to view details of restaurant.
            </p></div>
            <div><h3>
            9) How to view reviews for particular restaurant?</h3>
            <p>
            On foodchow customer can also provide rating to restaurant so that other customer will able to view those review. Go to any restaurant page and scroll down to view reviews/rating of that particular restaurant.
            </p></div>
            <div><h3>
            10) How to give rating to particular restaurant?</h3>
            <p>
            To improve performance of anything feedback of customer is very important. Foodchow also providing facility to give your feedback to restaurants. Just few simple clicks and your feedback will be recorded. Go to About page of any restaurant and Click on Add Reviews. Give your feedback and it will be display on particular restaurant page.
            </p></div>
            <div><h3>
            11) How to login to Admin Panel?</h3>
            <p>
            On foodchow every restaurant owner has their own admin panel from where owner can manage their restaurant details. For login to admin panel of restaurant, restaurant owner have to go to their restaurant page. Owner have to click on Restaurant Login to login in admin panel of restaurant.
            </p></div>
            <div><h3>
            12) How to view social media pages of restaurant?</h3>
            <p>
            Restaurant owner can list out their restaurant pages of various social media too, so that customer can visit those pages. Customer can view link of social media page of restaurant from restaurant page. Customer have to go to restaurant page and scroll down for social media page link of URL.
            </p></div>
            <div><h3>
            13) How to view restaurant menu?</h3>
            <p>
            Customer have to go to restaurant page to view menu of restaurant. From Cuisine option on restaurant page customer can view menu of that restaurant.
            </p></div>
            <div><h3>
            14) From where we can login to Customer account?</h3>
            <p>
                Customer can also register themselves on Foodchow if they are regular user of foodchow. Customer have to click on Login option from any restaurant page to login to their panel.
            </p></div>
            <div><h3>
            15) How to sign up as a new customer?</h3>
            <p>
            Customer should register themselves on foodchow if they are regular user of foodchow. They can register themselves on foodchow by few simple clicks. They to go to Login option on any restaurant and click on I am a New User.
            </p></div>
            <div><h3>
            16) How can customer can view history of placed order from foodchow?</h3>
            <p>
            If you are register user of foodchow you can maintain order history of yours. You just have to login to your user account and click on My Orders to view full order details and history.
            </p></div>
            <div><h3>
            17) How to change password of customer account?</h3>
            <p>
            Customer can change password of their panel by going to My Profile after login to their account. After changing the password of customer account customer can login to account using new password.
            </p></div>
            <div><h3>
            18) Can user place order if user is not registered on foodchow?</h3>
            <p>
            To place order on foodchow you don’t have to register yourself on foodchow. You can place order on foodchow as a guest user. After adding item to cart they have to select Guest option to place order as guest user.
            </p></div>
            <div><h3>
            19) How can customer send special request or instruction about food while placing orders?</h3>
            <p>
            Foodchow is providing you facility to send your special request or notes to restaurant with your order. You can write your special notes at the time of providing information of your address and all.
            </p></div>
            <div>
            <h3>
            20) How can customer change ingredients or customize item ?</h3>
            <p>
            Foodchow providing feature to customize item while placing order for food. If restaurant owner have provided functionality to customize the item. User have to open menu of the restaurant and click on Customize for item which you want to customize. You can change the ingredients or add more ingredients to item according to your choice.
            </p></div>
            <div><h3>
            21) How to join newsletter for new offers and new?</h3>
            <p>
            You can join newsletter for upcoming offers and news. You can join newsletter of any restaurant from home page of respective restaurant. You have to enter your email id to join newsletter.
            </p></div>
            <div><h3>
            22) Who will receive payment of orders?</h3>
            <p>
            Restaurant owner will get whole payment of orders placed through Foodchow. They have to set their own PayPal Account for online transaction.
            </p></div>
            <div><h3>
            23) Who will issue refund for order cancellation or other issue?</h3>
            <p>

            To customer, refund will be issue by restaurant owner only. Foodchow is not responsible for order cancellation or refund of the order.
            </p></div>
            <div><h3>
            24) Do I need to pay extra charges for online payment or online orders?</h3>
            <p>
            All extra charges are taken by restaurant owner. Foodchow is not taking any extra charges for online payment or online orders.
            </p></div>
        </div>
        <Footer/>
        </>
    )
}