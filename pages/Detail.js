import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import style from "../detail.module.css";

function Detail(props) {
  let { id } = useParams();
  id = Number(id);
  console.log(typeof id);
  let [count, setCount] = useState(0);
  let [alert, SetAlert] = useState(true);

  let box = styled.div`
    padding: 20px;
    color: grey;
    border: 1px solid #333;
  `;
  let BtnTest = styled.button`
    border: 1px solid #333;
    color: red;
    background: ${(props) => props.bg};
  `;

  useEffect(() => {
    let a = setTimeout(() => {
      SetAlert(false);
    }, 2000);
    console.log("test2");
    return () => {
      console.log("test1");
      clearTimeout(a);
    };
  }, []);

  return (
    <div className="list_con">
      <box>
        <BtnTest bg="green">테스트1</BtnTest>
        <BtnTest bg="blue">테스트2</BtnTest>
      </box>
      {alert == true ? (
        <div className={style.alert}>
          2초 이내로 클릭하지 않으면 자동 구매됩니다.
        </div>
      ) : null}

      <p>숫자{count} </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>

      <p>{props.shoes[id].title}</p>
      <img src={`${process.env.PUBLIC_URL}/img/product0${id + 1}.jpg`} />
      <p>{props.shoes[id].price}</p>
    </div>
  );
}

export default Detail;
