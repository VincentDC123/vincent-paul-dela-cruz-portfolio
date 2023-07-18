import mainMenu from '../Images/WMS/mainMenu.PNG';
import inventoryManagement from '../Images/WMS/inventoryManagement.PNG';
import orderList from '../Images/WMS/orderList.PNG';
import suppliers from '../Images/WMS/suppliers.PNG';
import profile from '../Images/WMS/profile.PNG';
import customerMenu from '../Images/WMS/customerMenu.PNG';
import shoppingCart from '../Images/WMS/shoppingCart.PNG';
import shoppingCartAddItem from '../Images/WMS/shoppingCartAddItem.PNG';
import checkout from '../Images/WMS/checkout.PNG';
import weatherApp from '../Images/WA/weatherapp.png';
import mainPage from '../Images/SWS/mainPage.png';
import addCompanyPage from '../Images/SWS/addCompanyPage.png';
import React from 'react';

const Projects = () => {
  return (
    <div className="h-screen w-full bg-gray-300">
      <div className="px-2 py-2 font-bold text-4xl flex items-center justify-center">
        Projects
      </div>
      <div className="w-full h-5/6 px-60 pt-10 pb-32">
        <div className="w-full h-full border-double border-4 border-zinc-950 overflow-hidden">
          <div className="py-5 font-semibold text-4xl flex items-center justify-center">
            Warehouse Management System
          </div>

          <div className="w-full h-full flex items-stretch justify-between">
            <div className="">
              <div className="text-2xl font-semibold flex items-center justify-center">
                Description
              </div>
              <div className="px-5 py-5 overflow-y-scroll no-scrollbar">
                <div>
                  WMS is an inventory management system for businesses that keeps track of stock and selling goods. The
                  application can also be used by customers to order items.
                </div>
                <ul className="list-disc list-outside ms-8">
                  <li>
                    Programmed in Java using Android Studio
                  </li>
                  <li>
                    Uses AWS DynamoDB as backend to store all relevant data 
                    (inventory and customer/employee information).
                  </li>
                </ul>
                <div>
                  Oversaw and contributed to core strategies, product roadmap, ops, designs, and design implementations.
                </div>
                <div>
                  Led the bi-weekly scrum meetings and sprint planning.
                </div>
                <ul className="list-disc list-outside ms-8">
                  <li>
                    The scrum meetings and sprint planning took place in Atlassian Jira for progress reports and
                    collaborations
                  </li>
                </ul>
                <div>
                  Contains: Java, AWS DynamoDB, AWS Cognito, Android Studio, Amplify, Appsync, GraphQL
                </div>
              </div>
            </div>

            <div className="">
                <div className="font-semibold text-2xl flex items-center justify-center">
                  Pictures
                </div>
                <div className="pt-12 pb-12 h-full">
                  <div className="h-96 overflow-y-scroll no-scrollbar ">
                    <div className="px-10 animate-move">
                      <div className="pb-5">
                        <img className="rounded-2xl" src={mainMenu} alt=""></img>
                      </div>
                      <div className="pb-5">
                        <img className="rounded-2xl" src={inventoryManagement} alt=""></img>
                      </div>
                      <div className="pb-5">
                        <img className="rounded-2xl" src={orderList} alt=""></img>
                      </div>
                      <div className="pb-5">
                        <img className="rounded-2xl" src={suppliers} alt=""></img>
                      </div>
                      <div className="pb-5">
                        <img className="rounded-2xl" src={profile} alt=""></img>
                      </div>
                      <div className="pb-5">
                        <img className="rounded-2xl" src={customerMenu} alt=""></img>
                      </div>
                      <div className="pb-5">
                        <img className="rounded-2xl" src={shoppingCart} alt=""></img>
                      </div>
                      <div className="pb-5">
                        <img className="rounded-2xl" src={shoppingCartAddItem} alt=""></img>
                      </div>
                      <div className="pb-5">
                        <img className="rounded-2xl" src={checkout} alt=""></img>
                      </div>
                    </div>  
                  </div>
                    
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen w-full bg-gray-300">
        <div className="w-full h-5/6 px-60 py-10">
          <div className="w-full h-full border-double border-4 border-zinc-950 overflow-hidden">
            <div className="py-5 font-semibold text-4xl flex items-center justify-center">
              Weather Application
            </div>
            <div className="w-full h-full flex items-stretch justify-between">
              <div className="max-w-1/2 w-1/2">
                <div className="text-2xl font-semibold flex items-center justify-center">
                  Description
                </div>
                <div className="px-5 py-5 overflow-y-scroll no-scrollbar">
                  <div>
                    Weather Application displays current weather and Fahrenheit on inputted location.
                  </div>
                  <ul className="list-disc list-outside ms-8">
                    <li>
                      Programmed in Java using Android Studio.
                    </li>
                    <li>
                      Uses OpenWeatherMap api to get relevant data.
                    </li>
                  </ul>
                  <div>
                    Contains: Java, Android Studio, OpenWeatherMap API
                  </div>
                </div>
              </div>
              <div className="max-w-1/2 w-1/2">
                <div className="font-semibold text-2xl flex items-center justify-center">
                  Pictures
                </div>
                <div className="">
                  <div className="py-5 flex items-center justify-center">
                    <img className="rounded-2xl" src={weatherApp} alt=""></img>  
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>

      <div className="h-screen w-full bg-gray-300">
        <div className="w-full h-5/6 px-60">
          <div className="w-full h-full border-double border-4 border-zinc-950 overflow-hidden">
            <div className="py-5 font-semibold text-4xl flex items-center justify-center">
              Stock Web Scraper
            </div>
            <div className="w-full h-full flex items-stretch justify-between">
              <div className="max-w-1/2 w-1/2">
                <div className="text-2xl font-semibold flex items-center justify-center">
                  Description
                </div>
                <div className="px-5 py-5 overflow-y-scroll no-scrollbar">
                  <div>
                    Stock Web Scraper is a website that uses data that was scraped from Yahoo Finance’s S&P 500. The data
                    includes company, symbol, and price  
                  </div>
                  <ul className="list-disc list-outside ms-8">
                    <li>
                      Programmed in Java using Intellij IDEA with React JS using Visual Studio Code.
                    </li>
                    <li>
                      Uses Spring Data JPA to connect to the database.
                    </li>
                    <li>
                      Uses REST API created from data scraped from yahoo finance’s S&P 500
                    </li>
                  </ul>
                  <div>
                    Contains: Java, React JS, TailwindCSS, Spring Data JPA, mySQL, Intellij IDEA, Visual Studio Code
                  </div>
                </div>
              </div>
              <div className="max-w-1/2 w-1/2">
                <div className="font-semibold text-2xl flex items-center justify-center">
                  Pictures
                </div>
                <div className="pt-5 pb-28 h-full overflow-y-hidden">
                  <div className="px-10">
                    <div className="pb-5">
                      <img className="rounded-2xl" src={mainPage} alt=""></img>
                    </div>
                    <div className="pb-5">
                      <img className="rounded-2xl" src={addCompanyPage} alt=""></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Projects