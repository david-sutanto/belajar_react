import { createElement, Fragment } from "react";
import { createRoot } from "react-dom/client";
import reactLogo from "./assets/react-logo.png";

/* CREATE FIRST PROJECT */
const root = createRoot(document.getElementById("root"));
// root.render(
//   <main class="container">
//     <div class="card text-white bg-primary">
//       <div class="card-header">
//         <div class="d-flex flex-row bd-highlight">
//           <div>
//             <img src={reactLogo} width="40px" alt="React logo" />
//           </div>
//           <div class="mt-1 ms-1">
//             <h3>ReactFacts</h3>
//           </div>
//         </div>
//       </div>
//       <div class="card-body">
//         <h1>Fun facts about React</h1>
//         <ul>
//           <li>Was first released in 20i3</li>
//           <li>Was originally created by Jordan Walke</li>
//           <li>Has well over i00K stars on Github</li>
//           <li>Is maintained by Meta</li>
//           <li>Powers thousand of enterprise apps, including mobile apps</li>
//         </ul>
//       </div>
//     </div>
//   </main>
// );
function Header() {
  return (
    <header>
      <img src={reactLogo} width="40px" alt="React Logo" />
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <h1 class="text-3xl">Reason I am excited to learn React</h1>
      <ol>
        <li>
          React is a popular library, so I will be able to fit in with all the
          coolest devs out there! 😎
        </li>
        <li>
          I am more likely to get a job as front end developer if I know React
        </li>
      </ol>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2024 David Sutanto. All rights reserved</small>
    </footer>
  );
}
//Challenge 2 :
function Page() {
  return (
    <Fragment>
      <Header />
      <MainContent />
      <Footer />
    </Fragment>
  );
}

root.render(<Page />);

// const root = createRoot(document.getElementById("root"));

//React Element
//const reactElement = createElement("h1", null, "Hello from React Element!");

//Nested React Element
// const reactElement = (
//   <h1>
//     <span>Hello from nested element</span>
//   </h1>
// );

// function MyAwesomeNavbar() {
//   return (
//     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div class="container-fluid">
//         <a class="navbar-brand" href="#">
//           My Awesome Navbar
//         </a>
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//             <li class="nav-item">
//               <a class="nav-link active" aria-current="page" href="#">
//                 Home
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="#">
//                 Link
//               </a>
//             </li>
//             <li class="nav-item dropdown">
//               <a
//                 class="nav-link dropdown-toggle"
//                 href="#"
//                 id="navbarDropdown"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Dropdown
//               </a>
//               <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <li>
//                   <a class="dropdown-item" href="#">
//                     Action
//                   </a>
//                 </li>
//                 <li>
//                   <a class="dropdown-item" href="#">
//                     Another action
//                   </a>
//                 </li>
//                 <li>
//                   <hr class="dropdown-divider" />
//                 </li>
//                 <li>
//                   <a class="dropdown-item" href="#">
//                     Something else here
//                   </a>
//                 </li>
//               </ul>
//             </li>
//             <li class="nav-item">
//               <a
//                 class="nav-link disabled"
//                 href="#"
//                 tabindex="-1"
//                 aria-disabled="true"
//               >
//                 Disabled
//               </a>
//             </li>
//           </ul>
//           <form class="d-flex">
//             <input
//               class="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button class="btn btn-outline-success" type="submit">
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }
// function MainContent() {
//   return <h1>React is great !</h1>;
// }

// root.render(
//   <div>
//     <MyAwesomeNavbar />
//     <MainContent />
//   </div>
// );

// root.render(<h1 className="header">Hello, React!</h1>);

// const h1 = document.createElement("h1");
// h1.textContent = "This is imperative coding";
// h1.className = "header";
// document.getElementById("root").appendChild(h1);
