import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import Stopwatch from "./routes/stopWatch/Stopwatch";
import NoPage from "./routes/NoPage";
import './index.css'
import Quiz from './routes/quiz/Quiz';
import Accordion from './routes/Accordion/Accordion';
import Messenger from './routes/Message/Messenger';
import VideoPlay from './routes/videoPlay/VideoPlay';
import FormII from './routes/Form/FormII';
import App from './routes/List/App';
import CheckList from './routes/CheckList/CheckList';
import Counter from './routes/counter/Counter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="check-list" element={<CheckList />} />

          <Route path="stop-watch" element={<Stopwatch />} />
          <Route path="render-list" element={<App />} />
          <Route path="counter" element={<Counter />} />

          <Route path="quiz" element={<Quiz />} />
          <Route path="accordion" element={<Accordion />} />

          <Route path="messenger" element={<Messenger />} />
          <Route path="video-play" element={<VideoPlay />} />
          <Route path="form" element={<FormII />} />

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>  </React.StrictMode>,
)
