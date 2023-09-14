'use client';

import { useReactMediaRecorder } from "react-media-recorder";

const RecordView = () => {

  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: false, audio: true, });

    
  return (
    <div>
      <p>status {status}</p>
      <button onClick={startRecording} className="p-1 bg-slate-400">Start Recording</button>
      <button onClick={stopRecording} className="p-1 bg-slate-400">Stop Recording</button>
      
      <audio src={mediaBlobUrl} controls autoPlay loop />

    </div>
  );
};

export default RecordView;