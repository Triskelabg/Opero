import { useState } from "react";
import { Link } from "react-router-dom";


export default function FixedMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 right-8 z-20 flex items-center justify-end h-screen p-4">
      {/* Bouton Menu */}
      <div
        className="bg-white w-20 h-44 flex flex-col justify-center items-center rounded-lg shadow-lg cursor-pointer"
        onClick={toggleMenu}
      >
        <p className="text-[#06102E] font-medium">Menu</p>
        {!isOpen ? (
          <div className="mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path d="M16.9999 1L0.999878 1" stroke="#06102E" stroke-linecap="round" />
              <path d="M16.9999 7L0.999878 7" stroke="#06102E" stroke-linecap="round" />
              <path d="M16.9999 13L0.999878 13" stroke="#06102E" stroke-linecap="round" />
            </svg>
          </div>
        ) : (
          <p className="text-[#06102E] text-xl mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
            <path d="M12.3137 12.3137L1.00001 1.00001" stroke="#06102E" stroke-linecap="round" />
            <path d="M1.31372 12.3137L12.6274 1.00001" stroke="#06102E" stroke-linecap="round" />
          </svg></p>
        )}
      </div>

      {/* Menu déroulant */}
      {isOpen && (
        <div className="absolute top-200 right-[8rem] bg-white shadow-lg rounded-lg p-4 w-60">
          <ul className="space-y-4">
          <a href="/a-propos">
              <li className="flex items-center text-[#06102E]">
                <span className="text-green-400 mr-2"><svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Group 7">
                    <path id="Vector" d="M13.6911 16V15.0609C13.6911 12.1762 11.3527 9.83685 8.468 9.83685H6.22311C3.33843 9.83685 1 12.1753 1 15.0609V16H13.6911Z" stroke="#64E7D2" stroke-miterlimit="10" stroke-linejoin="round" />
                    <path id="Vector_2" d="M10.4214 4.83312C10.6306 3.13448 9.42311 1.5879 7.72447 1.37873C6.02584 1.16957 4.47926 2.37702 4.27009 4.07565C4.06092 5.77429 5.26837 7.32087 6.96701 7.53004C8.66565 7.73921 10.2122 6.53175 10.4214 4.83312Z" stroke="#64E7D2" stroke-miterlimit="10" stroke-linejoin="round" />
                  </g>
                </svg>
                </span> À propos
              </li>
            </a>
            <a href="/se-former">
            <li className="flex items-center text-[#06102E] mt-2">
              <span className="text-green-400 mr-2"><svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 9">
                  <path id="Vector" d="M5.05448 5.95833L1.34448 4.5L7.28087 2.16667L10.25 1L19.1556 4.5L15.4456 5.95833L10.25 8L5.05448 5.95833Z" fill="white" />
                  <path id="Vector_2" d="M16.9292 15.7C18.162 15.7 19.1556 16.9522 19.1556 18.5C19.1556 20.0478 18.162 21.3 16.9292 21.3L16.2234 21.1522C14.7475 20.845 13.2406 20.6486 11.7336 20.5728V16.4272C13.2406 16.3514 14.7475 16.155 16.2234 15.8478L16.9292 15.7Z" fill="white" />
                  <path id="Vector_3" d="M16.9292 15.7L16.2233 15.8478C16.4469 15.7486 16.6842 15.7 16.9292 15.7Z" fill="white" />
                  <path id="Vector_4" d="M16.2233 21.1522L16.9292 21.3C16.6842 21.3 16.4469 21.2514 16.2233 21.1522Z" fill="white" />
                  <path id="Vector_5" d="M15.4456 5.95834V10.1L10.25 12.2L5.05447 10.1V5.95834L10.25 8.00001L15.4456 5.95834Z" fill="white" />
                  <path id="Vector_6" d="M11.7337 20.5728V22L10.2501 21.3L8.76645 22V16.4C8.76645 16.0131 9.09895 15.7 9.50728 15.7H10.9928C11.4012 15.7 11.7337 16.0131 11.7337 16.4V20.5728Z" fill="white" />
                  <path id="Vector_7" d="M8.76636 16.4272V20.5728C7.25942 20.6486 5.75248 20.845 4.27664 21.1522C4.33109 21.1289 4.38553 21.1036 4.43803 21.0744H4.43998C4.65192 20.9617 4.84831 20.8081 5.01942 20.6214C5.06414 20.5747 5.10497 20.5281 5.14581 20.4775C5.17109 20.4444 5.19636 20.4114 5.2197 20.3783C5.24692 20.3433 5.2722 20.3064 5.29359 20.2694C5.32081 20.2306 5.34414 20.1917 5.36748 20.1528C5.40053 20.0944 5.43164 20.0361 5.46275 19.9739C5.61442 19.6686 5.71942 19.3244 5.76803 18.955C5.78747 18.8072 5.7972 18.6556 5.7972 18.5C5.7972 17.2614 5.15942 16.2172 4.27664 15.8478C5.75248 16.155 7.25942 16.3514 8.76636 16.4272Z" fill="white" />
                  <path id="Vector_8" d="M5.79726 18.5C5.79726 18.6556 5.78754 18.8072 5.76809 18.955C5.71754 19.3245 5.61254 19.6686 5.46282 19.9739C5.4317 20.0361 5.40059 20.0945 5.36754 20.1528C5.3442 20.1917 5.32087 20.2306 5.29365 20.2695C5.27032 20.3064 5.24504 20.3433 5.21976 20.3783C5.19643 20.4114 5.17115 20.4445 5.14587 20.4775C5.10504 20.5281 5.06226 20.5747 5.01948 20.6214C4.84643 20.8061 4.65198 20.9597 4.44004 21.0745H4.43809C4.38559 21.1017 4.33115 21.1289 4.2767 21.1522L3.57087 21.3C2.33809 21.3 1.34448 20.0478 1.34448 18.5C1.34448 16.9522 2.33809 15.7 3.57087 15.7L4.2767 15.8478C5.15948 16.2172 5.79726 17.2614 5.79726 18.5Z" fill="white" />
                  <path id="Vector_9" d="M5.76811 18.955C5.7195 19.3244 5.6145 19.6686 5.46283 19.9739C5.61255 19.6686 5.71755 19.3244 5.76811 18.955Z" fill="white" />
                  <path id="Vector_10" d="M5.01941 20.6214C5.06219 20.5747 5.10496 20.5281 5.1458 20.4775C5.10496 20.5281 5.06413 20.5747 5.01941 20.6214Z" fill="white" />
                  <path id="Vector_11" d="M4.44003 21.0744C4.65198 20.9597 4.84642 20.8061 5.01948 20.6214C4.84837 20.808 4.65198 20.9616 4.44003 21.0744Z" fill="white" />
                  <path id="Vector_12" d="M4.27664 21.1522C4.33109 21.1289 4.38553 21.1017 4.43803 21.0744C4.38553 21.1036 4.33109 21.1289 4.27664 21.1522Z" fill="white" />
                  <path id="Vector_13" d="M4.2767 15.8478L3.57086 15.7C3.81586 15.7 4.05308 15.7486 4.2767 15.8478Z" fill="white" />
                  <path id="Vector_14" d="M3.57086 21.3L4.2767 21.1522C4.05308 21.2514 3.81586 21.3 3.57086 21.3Z" fill="white" />
                  <path id="Vector_15" d="M7.28087 2.16667L1.34448 4.5L5.05448 5.95833L10.25 8L15.4456 5.95833L19.1556 4.5L10.25 1L7.28087 2.16667Z" stroke="#64E7D2" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Vector_16" d="M3.57087 21.3C2.33809 21.3 1.34448 20.0478 1.34448 18.5C1.34448 16.9522 2.33809 15.7 3.57087 15.7" stroke="#64E7D2" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Vector_17" d="M4.43803 21.0744C4.38553 21.1036 4.33109 21.1289 4.27664 21.1522" stroke="#64E7D2" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Vector_18" d="M5.14587 20.4775C5.10503 20.5281 5.0642 20.5747 5.01948 20.6214C4.84837 20.8081 4.65198 20.9617 4.44003 21.0745" stroke="#64E7D2" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Vector_19" d="M5.29362 20.2694C5.27028 20.3064 5.245 20.3433 5.21973 20.3783" stroke="#64E7D2" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Vector_20" d="M5.76811 18.955C5.7195 19.3244 5.6145 19.6686 5.46283 19.9739" stroke="#64E7D2" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Vector_21" d="M3.57086 21.3L4.2767 21.1522C4.05308 21.2514 3.81586 21.3 3.57086 21.3Z" stroke="#64E7D2" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Vector_22" d="M4.2767 15.8478L3.57086 15.7C3.81586 15.7 4.05308 15.7486 4.2767 15.8478Z" stroke="#64E7D2" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Vector_23" d="M11.7336 16.4272C13.2406 16.3514 14.7475 16.155 16.2234 15.8478L16.9292 15.7C18.162 15.7 19.1556 16.9522 19.1556 18.5C19.1556 20.0478 18.162 21.3 16.9292 21.3L16.2234 21.1522C14.7475 20.845 13.2406 20.6486 11.7336 20.5728" stroke="#64E7D2" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Vector_24" d="M8.76636 20.5728C7.25942 20.6486 5.75248 20.845 4.27664 21.1522C4.33109 21.1289 4.38553 21.1017 4.43803 21.0744H4.43998C4.65192 20.9597 4.84636 20.8061 5.01942 20.6214C5.0622 20.5747 5.10497 20.5281 5.14581 20.4775C5.17109 20.4444 5.19636 20.4114 5.2197 20.3783C5.24692 20.3433 5.2722 20.3064 5.29359 20.2694C5.32081 20.2306 5.34414 20.1917 5.36748 20.1528C5.40053 20.0944 5.43164 20.0361 5.46275 19.9739C5.61248 19.6686 5.71747 19.3244 5.76803 18.955C5.78747 18.8072 5.7972 18.6556 5.7972 18.5C5.7972 17.2614 5.15942 16.2172 4.27664 15.8478C5.75248 16.155 7.25942 16.3514 8.76636 16.4272" stroke="#64E7D2" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Vector_25" d="M16.9292 21.3C16.6842 21.3 16.4469 21.2514 16.2233 21.1522" stroke="#64E7D2" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Vector_26" d="M16.9292 15.7C16.6842 15.7 16.4469 15.7486 16.2233 15.8478" stroke="#64E7D2" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Vector_27" d="M11.7337 20.5728V22L10.2501 21.3L8.76645 22V16.4C8.76645 16.0131 9.09895 15.7 9.50728 15.7H10.9928C11.4012 15.7 11.7337 16.0131 11.7337 16.4V20.5728Z" stroke="#64E7D2" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Vector_28" d="M15.4456 10.1L10.25 12.2L5.05447 10.1V5.95833V5.95639" stroke="#64E7D2" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Vector_29" d="M10.25 4.5L15.4456 5.95639V5.95833V10.1V12.9" stroke="#64E7D2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              </span> Se former
            </li>
            </a>
            <li className="flex items-center text-[#06102E]">
              <span className="text-green-400 mr-2">📚</span> Enseigner
            </li>
            <li className="flex items-center text-[#06102E]">
              <span className="text-green-400 mr-2">🏫</span> Institutions
            </li>
            <li className="flex items-center text-[#06102E]">
              <span className="text-green-400 mr-2"><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 8">
                  <path id="Vector" d="M18.1846 8.23003H14.882V1.31245C14.882 1.1406 14.7414 1 14.5696 1H1.31245C1.1406 1 1 1.1406 1 1.31245V16.3755C1 17.5472 1.94984 18.4939 3.12152 18.4971H16.3787C17.5503 18.4971 18.4971 17.5472 18.5002 16.3755V8.54248C18.5002 8.37063 18.3596 8.23003 18.1877 8.23003H18.1846Z" stroke="#64E7D2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Vector_2" d="M12.1574 3.30585H3.72135C3.54951 3.30585 3.40891 3.44645 3.40891 3.61829V7.66761C3.40891 7.83946 3.54951 7.98006 3.72135 7.98006H12.1574C12.3293 7.98006 12.4699 7.83946 12.4699 7.66761V3.61829C12.4699 3.44645 12.3293 3.30585 12.1574 3.30585Z" stroke="#64E7D2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Vector_3" d="M11.7451 10H9.25489C9.1147 10 9 10.1805 9 10.4011V15.5989C9 15.8195 9.1147 16 9.25489 16H11.7451C11.8853 16 12 15.8195 12 15.5989V10.4011C12 10.1805 11.8853 10 11.7451 10Z" stroke="#64E7D2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <g id="Vector_4">
                    <path d="M7 11H4H7Z" fill="#64E7D2" />
                    <path d="M7 11H4" stroke="#64E7D2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <g id="Vector_5">
                    <path d="M7 15H4H7Z" fill="#64E7D2" />
                    <path d="M7 15H4" stroke="#64E7D2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <g id="Vector_6">
                    <path d="M7 13H4H7Z" fill="#64E7D2" />
                    <path d="M7 13H4" stroke="#64E7D2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <path id="Vector_7" d="M14.882 8.38315V18.3658" stroke="#64E7D2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              </span> Actualités
            </li>
            <li className="flex items-center text-[#06102E]">
              <span className="text-green-400 mr-2"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 6">
                  <path id="Vector" d="M8.37823 4.53146C10.5946 4.53146 12.3905 6.32831 12.3905 8.54373" stroke="#64E7D2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Vector_2" d="M8.37823 1C12.5442 1 15.922 4.37781 15.922 8.54374" stroke="#64E7D2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Vector_3" d="M14.654 14.6536C15.0009 14.1313 15.2206 13.6138 15.2753 13.1019C15.3054 12.8171 15.1518 12.5438 14.8925 12.4221L11.7164 10.9392C11.4921 10.8346 11.2243 10.9006 11.0754 11.0985C10.9434 11.2739 10.8077 11.4455 10.6681 11.6133C10.1364 12.2534 9.2135 12.4118 8.50173 11.9809C7.92761 11.6331 7.3252 11.1777 6.57385 10.4264C5.82249 9.67408 5.36715 9.07262 5.01928 8.49849C4.58845 7.78673 4.74683 6.8638 5.38695 6.3321C5.55475 6.19257 5.72727 6.05588 5.90168 5.92484C6.09965 5.77588 6.16659 5.50815 6.061 5.28378L4.57808 2.10771C4.45647 1.84846 4.18402 1.69386 3.89837 1.72497C3.38647 1.77964 2.86797 2.00024 2.34664 2.34623C-0.348633 4.43815 1.30398 9.02925 4.63748 12.3628C7.97192 15.6953 12.5621 17.3489 14.654 14.6536Z" stroke="#64E7D2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              </span> Contact
            </li>
            <li className="flex items-center text-[#06102E]">
              <span className="text-green-400 mr-2"><svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 7">
                  <path id="Vector" d="M13.6911 16V15.0609C13.6911 12.1762 11.3527 9.83685 8.468 9.83685H6.22311C3.33843 9.83685 1 12.1753 1 15.0609V16H13.6911Z" stroke="#64E7D2" stroke-miterlimit="10" stroke-linejoin="round" />
                  <path id="Vector_2" d="M10.4214 4.83312C10.6306 3.13448 9.42311 1.5879 7.72447 1.37873C6.02584 1.16957 4.47926 2.37702 4.27009 4.07565C4.06092 5.77429 5.26837 7.32087 6.96701 7.53004C8.66565 7.73921 10.2122 6.53175 10.4214 4.83312Z" stroke="#64E7D2" stroke-miterlimit="10" stroke-linejoin="round" />
                </g>
              </svg>
              </span> Inscription
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
