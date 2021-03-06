import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import Article from 'components/Article';
import Vote from './Vote';
import News from './News';
import ReadingStatus from './ReadingStatus';
import styles from './index.module.scss';

export default ({
  title = '',
  author = {},
  description = '',
  processes = [],
  processIndex = 0,
  votes = [],
  news = [],
  questions = [],
}) => {
  styles;
  
  return (
    <div className="p3 overflow-y fullheight">
      <h1><b>{title}</b></h1>
      <h5 className="py-1"><b>{author.name}</b> 提交的議案</h5>
      
      <Article title="摘要">
        <p>{description}</p>
      </Article>
      
      <Article title="進度">
        <div className="flex-row-parent flex-space-between">
          {processes.map((p, i) => (
            <ReadingStatus
              label={p}
              active={i <= processIndex}
              lastActive={i === processIndex + 1}
            />
          ))}
        </div>
      </Article>
      {votes.map(voteData => (
        <Article title={voteData.title}>
          <Vote data={voteData} />
        </Article>
      ))}
      
      <Article title="相關新聞" onMore={() => {}}>
        <News data={news}/>
      </Article>
      
      <Article title="質詢紀錄" onMore={() => {}}>
        {questions.map((q, i) => (
          <div className="flex-row-parent border-bottom my-2">
            <div className="flex-50">{i + 1}</div>
            <div className="flex-50"><b>{q.member.name}</b></div>
            <div className="flex-expand">向 <b>{q.target}</b> 就 <b>{q.title}</b> 質詢</div>
          </div>
        ))}
      </Article>
    </div>
    
  )
}