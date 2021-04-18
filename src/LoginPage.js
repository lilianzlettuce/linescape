import './login.css';

function LoginPage(props) {
  return (
      <div id="login-page">
          <div id="circle"></div>
          <svg className="canvas" id="canvas3" width="600" height="600">
              <path id="line" className="draw" stroke="white" strokeLinecap="round" strokeWidth="20" fill="transparent" d="M 768 368 Q 627 237, 554 329          Q 507 393, 454 431    Q 355 492, 340 325  Q 335 213, 295 189  Q 260 173, 219 240        Q 193 288, 149 327    Q 101 362, 61 347      Q 22 323, 6 349 " />
          </svg>
          <div id="login-box">
              <h1 id="login-title">Sign in to LineScape</h1>
              <input type="email" placeholder="Email" className="login-input" id="email" />
              <input type="password" placeholder="Password" className="login-input" id="password" />
              <button id="loginBtn" className="button">→</button>
              <p id="create-acct">Create an account</p>
          </div>
      </div>
  )
}

export default LoginPage;
