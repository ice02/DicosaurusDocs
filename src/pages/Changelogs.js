import React from 'react';
import Layout from '@theme/Layout';
import {Redirect} from '@docusaurus/router';
import {ReleaseNotes} from '@site/src/components/ReleaseNotes'

function Download() {
//   return <Redirect to="/releases/latest/download/" />;
    return <ReleaseNotes />
}

export default Download;

// function Hello() {
//     return (
//       <Layout title="Hello2">
//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             height: '50vh',
//             fontSize: '20px',
//           }}>
//           {/* <p>
//             Edit <code>pages/hello.js</code> and save to reload.
//           </p> */}
//           <RealeaseNotes />
//         </div>
//       </Layout>
//     );
//   }
  
//   export default Hello;