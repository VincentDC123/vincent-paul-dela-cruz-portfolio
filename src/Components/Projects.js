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
            <div className="max-w-1/2 w-full">
              <div className="text-2xl font-semibold flex items-center justify-center">
                Description
              </div>
              <div className="px-5 py-5 text-justify overflow-y-scroll no-scrollbar">
                <div>
                The Warehouse Management System (WMS) is a comprehensive inventory management application developed in 
                Java using Android Studio. It empowers businesses to efficiently track stock, manage selling goods, and 
                offers customers the convenience of ordering items through a user-friendly interface. 
                The system utilizes AWS DynamoDB as its backend, ensuring seamless storage of crucial data such as inventory 
                and customer/employee information. Key technologies employed include AWS Cognito, Amplify, Appsync, and GraphQL.
                </div>
                <ul className="list-disc list-outside ms-8">
                  <li>
                    Led the end-to-end development and implementation of the WMS application, 
                    contributing to core strategies and shaping the product roadmap.
                  </li>
                  <li>
                    Oversaw the design and design implementation processes, 
                    ensuring alignment with project goals and user experience.
                  </li>
                  <li>
                    Effectively manage bi-weekly scrum meetings and sprint planning sessions, 
                    fostering collaboration and progress tracking among team members.
                  </li>
                  <li>
                    Utilized Atlassian Jira for progress reporting and seamless collaboration during the project lifecycle.
                  </li>
                </ul>
                <div>
                  Key technologies utilized: Java, Android Studio, AWS DynamoDB, AWS Cognito, AWS Amplify, AWS Appsync.
                </div>
              </div>
            </div>

            <div className="">
                <div className="font-semibold text-2xl flex items-center justify-center">
                  Pictures
                </div>
                <div className="pt-12 pb-12 h-full max-w-1/2 w-full">
                  <div className="h-4/6 overflow-y-scroll no-scrollbar">
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
              <div className="max-w-1/2 w-full">
                <div className="text-2xl font-semibold flex items-center justify-center">
                  Description
                </div>
                <div className="px-5 py-5 text-justify overflow-y-scroll no-scrollbar">
                  <div>
                  The Weather Application is a user-friendly mobile app designed to display real-time weather and Fahrenheit temperature for a specified location. 
                  Developed using Java and Android Studio, the application leverages the power of the OpenWeatherMap API to retrieve relevant weather data and 
                  present it in an intuitive and accessible manner.
                  </div>
                  <ul className="list-disc list-outside ms-8">
                    <li>
                      Seamless display of current weather conditions for user-inputted locations.
                    </li>
                    <li>
                      Real-time updates of Fahrenheit/Celsius temperature for the selected location.
                    </li>
                    <li>
                      Intuitive user interface for ease of navigation and data visualization.
                    </li>
                  </ul>
                  <div>
                    Key technologies utilized: Java, Android Studio, OpenWeatherMap API
                  </div>
                </div>
              </div>
              <div className="max-w-1/2 w-full">
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
              <div className="max-w-1/2 w-full">
                <div className="text-2xl font-semibold flex items-center justify-center">
                  Description
                </div>
                <div className="px-5 py-5 text-justify overflow-y-scroll no-scrollbar">
                  <div>
                    The Stock Web Scraper is a dynamic website that utilizes data scraped from Yahoo Finance's S&P 500 to provide valuable information about various companies. 
                    This data includes company details, symbols, and current prices. 
                    The application is programmed using Java in Intellij IDEA for the backend and React JS in Visual Studio Code for the frontend. 
                    It leverages Spring Data JPA to establish a seamless connection to the database, and a REST API is created from the scraped data to ensure smooth and efficient data retrieval.  
                  </div>
                  <ul className="list-disc list-outside ms-8">
                    <li>
                      Developed a robust web scraper to collect essential data from Yahoo Finance’s S&P 500, ensuring accurate and up-to-date information for users.
                    </li>
                    <li>
                      Implemented a user-friendly frontend using React JS and TailwindCSS, enabling seamless navigation and a visually appealing experience.
                    </li>
                    <li>
                      Utilized Spring Data JPA to establish a reliable and efficient connection to the database, facilitating smooth data management.
                    </li>
                    <li>
                      Created a REST API to serve the scraped data, providing users with real-time access to company details and stock prices.
                    </li>
                  </ul>
                  <div>
                    Key technologies utilized: Java, React JS, TailwindCSS, Spring Data JPA, MySQL, Intellij IDEA, Visual Studio Code
                  </div>
                </div>
              </div>
              <div className="max-w-1/2 w-full">
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