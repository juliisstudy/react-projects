import Heading from "./Heading";
import Section from "./Section";
/* eslint-disable react/prop-types */

export default function Context() {
  return (
    <Section>
      <Heading> My Reading List</Heading>
      <Post title="Gone Girl" body="Gillian Flynn" />
      <AllPosts />
    </Section>
  );
}

function AllPosts() {
  return (
    <Section>
      <Heading>Read List</Heading>
      <RecentPosts />
    </Section>
  );
}
function RecentPosts() {
  return (
    <Section>
      <Heading>Recent Reading List</Heading>
      <Post title="Gone with the wind" body="Margaret Mitchell" />
    </Section>
  );
}

function Post({ title, body }) {
  return (
    <Section isFancy={true}>
      <Heading>{title}</Heading>
      <p>
        <i>{body}</i>
      </p>
    </Section>
  );
}
