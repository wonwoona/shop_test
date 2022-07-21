import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import data from "./data.js";
import { useState } from "react";
import { Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";
import Detail from "./pages/Detail.js";
import About from "./pages/About.js";


function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate()
  console.log(shoes)

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">로고</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/detail">상세페이지</Nav.Link>
            <Nav.Link href="/about">회사소개</Nav.Link>
            <Nav.Link onClick={()=>{navigate('about/ceo')}}>조직도</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <div className="headimg">
        <img src={`${process.env.PUBLIC_URL}/img/test1.jpg`} />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div className="productlist">
              {shoes.map((a, i) => {
                return (
                <div key={i} onClick={()=>{navigate('./detail/+1')}}>
                  <Card shoes={shoes[i]} i={i} />
                </div>
                )
              })}
            </div>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={<About />}>
          <Route path="ceo" element={<>회장님 인사말</>} />
        </Route>
        <Route path="*" element={<>404페이지</>} />
      </Routes>
    </>
  );
}

function Card(props) {
  return (
    <div className="list" >
      <img src={`${process.env.PUBLIC_URL}/img/product0${props.i + 1}.jpg`} />
      <p>{props.shoes.title}</p>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}
export default App;


// import logo from "./img/test1.jpg";
// import { Navbar, Container, Nav, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import react from "react";
// import data from "./data.js";
// import { Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";
// import About from "./pages/about.js";
// import Detail from "./pages/detail.js";




// function App() {
//   let [shoes] = react.useState(data);
//   let navigate = useNavigate();
//   return (
//     <>
//       <Button variant="primary">Primary</Button>{" "}
//       <Navbar bg="primary" variant="dark">
//         <Container>
//           <Navbar.Brand href="/">로고</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="/detail">상세페이지</Nav.Link>
//             <Nav.Link href="/about">회사소개</Nav.Link>
//             <Nav.Link onClick={()=>{navigate('about/ceo')}}>조직도</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//       <Link to='/detail'>상세페이지 테스트</Link>
//       <div className="headImg">
//         <img src={logo} width="100%" />
//       </div>
//       <Routes>
//         <Route path="/" element={
//             <div className="pdList">
//               {shoes.map((a, i) => {
//                 return (
//                 <div key={i} onClick={()=>{navigate('./detail/'+i)}}>
//                   <Card  shoes={shoes[i]} i={i} />
//                 </div>
//                 )
//               })}
//               {/* {변수.map((a,i)=>{return(<짜놓은정보 />)})} */}

//               {/* <Card shoes={shoes[1]}/>
//         <Card shoes={shoes[2]}/> */}
//               {/* <div className="list">
//           <img src={`${process.env.PUBLIC_URL}/img/product02.jpg`}/>
//           <p>{data[1].title}</p>
//           <p>{data[1].content}</p>
//           <p>{data[1].price}</p>
//         </div>
//         <div className="list">
//           <img src={`${process.env.PUBLIC_URL}/img/product03.jpg`}/>
//           <p>{data[2].title}</p>
//           <p>{data[2].content}</p>
//           <p>{data[2].price}</p>
//         </div> */}
//             </div>
//           } />
//         <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
//         <Route path="/about" element={<About />}>
//           <Route path="ceo" element={<>회장님인사말</>} />
//         </Route>
//         <Route path="*" element={<>404page</>} />
//       </Routes>
//     </>
//   );
// }

// function Card(props) {
//   return (
//     <div className="list">
//       <img src={`${process.env.PUBLIC_URL}/img/product0${props.i + 1}.jpg`} />
//       <p>{props.shoes.title}</p>
//       <p>{props.shoes.content}</p>
//       <p>{props.shoes.price}</p>
//     </div>
//   );
// }
// export default App;
