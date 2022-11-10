import { withAuthenticator } from '@aws-amplify/ui-react';

export function getServerSideProps() {
    return {
      props: {
        time: Date()
      },
    };
  }

function Secret({ user, time }) {
  return (
    <div>
       Logged in as {user.username}. This page was server-side rendered at {time}.
    </div>
  )
}
 
export default withAuthenticator(Secret)
