import { useState } from "react";

export default function App() {
  const [state, setState ] = useState({

  });
  const [result, setResult] = useState(0);

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input type="number" value={} onChange={}/> 만큼을 <button>더할게요</button> <button>뺄게요</button>
        <button>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>0</p>
      </div>
    </div>
  );
}
