import React from 'react';
import {
  Container, Card, Grid, Heading,
} from 'theme-ui';
import Head from '../components/Head';
import Header from '../components/Header';
import Text from '../components/Text';
import Link from '../components/Link';

const IndexPage = () => (
  <>
    <Head title="Home" />
    <Header />
    <Container>
      <Text>
        <Text as="span" variant="headline" sx={{ display: 'block' }}>
          Hello! My name is <Text as="span" variant="rainbow">Dalton Craven</Text>.{' '}
        </Text>
        It's hard for me to introduce myself over the internet, but here's a little bit about myself:
      </Text>
      <Grid
        gap={3}
        columns={[1, 2]}
      >
        <Card variant="interactive">
          <Heading as="h3">Coding</Heading>
          <Text>
            I'm currently entering my sophomore year at the University of South Carolina, pursuing a Bachelor of Science in Computer Science in Computer Science (weird, right?). I'm also a web developer at <Link to="https://cloverleaf.me">Cloverleaf</Link>.
          </Text>
        </Card>
        <Card
          variant="interactive"
          sx={{
            // background: theme => `${theme.background.cornerRainbow}`,
          }}
        >
          <Heading as="h3">Activism</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare augue quis nisl varius rhoncus.
            Donec quis massa vel est mollis imperdiet. Fusce et mauris eleifend, tristique mi varius, luctus purus.
            Nulla placerat, lacus luctus mollis facilisis, leo metus tempus tellus, et interdum est tortor ac justo.
            Aenean aliquam magna eu vehicula porta. Sed in molestie lectus, et tristique odio.
            Donec eu urna id purus lacinia iaculis.
          </Text>
        </Card>
        <Card variant="interactive">
          <Heading as="h3">Computer Science</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare augue quis nisl varius rhoncus.
            Donec quis massa vel est mollis imperdiet. Fusce et mauris eleifend, tristique mi varius, luctus purus.
            Nulla placerat, lacus luctus mollis facilisis, leo metus tempus tellus, et interdum est tortor ac justo.
            Aenean aliquam magna eu vehicula porta. Sed in molestie lectus, et tristique odio.
            Donec eu urna id purus lacinia iaculis.
          </Text>
        </Card>
        <Card variant="interactive">
          <Heading as="h3">Computer Science</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare augue quis nisl varius rhoncus.
            Donec quis massa vel est mollis imperdiet. Fusce et mauris eleifend, tristique mi varius, luctus purus.
            Nulla placerat, lacus luctus mollis facilisis, leo metus tempus tellus, et interdum est tortor ac justo.
            Aenean aliquam magna eu vehicula porta. Sed in molestie lectus, et tristique odio.
            Donec eu urna id purus lacinia iaculis.
          </Text>
        </Card>
      </Grid>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare augue quis nisl varius rhoncus.
        Donec quis massa vel est mollis imperdiet. Fusce et mauris eleifend, tristique mi varius, luctus purus.
        Nulla placerat, lacus luctus mollis facilisis, leo metus tempus tellus, et interdum est tortor ac justo.
        Aenean aliquam magna eu vehicula porta. Sed in molestie lectus, et tristique odio.
        Donec eu urna id purus lacinia iaculis.
      </Text>

      <Text>
        Vivamus id feugiat odio, eget vestibulum nulla. Ut id felis tempor, aliquam turpis ac, egestas libero.
        Proin tincidunt vestibulum sapien sed elementum. Nulla facilisi. Vivamus suscipit urna vitae viverra pulvinar.
        Nunc ultricies eleifend orci quis euismod. Duis fringilla justo sed blandit vestibulum. Sed nec ultrices eros.
        Nulla quis tristique quam. Praesent sodales congue malesuada. Integer sollicitudin consequat eleifend.
        Donec nec ligula lacinia lacus blandit porttitor. Sed in nibh metus. Pellentesque et accumsan tellus.
      </Text>

      <Text>
        Morbi dapibus nibh quam, et auctor enim interdum eget. Integer et pellentesque sapien.
        Fusce suscipit dapibus lectus, id egestas nunc tincidunt vel. Mauris pellentesque sit amet leo quis semper.
        Nulla euismod pulvinar lorem, quis lacinia lectus mattis at. Morbi blandit non risus sit amet dictum.
        Nulla facilisi. Etiam sollicitudin urna nibh, eu condimentum lorem vehicula at. Praesent eu lacus volutpat,
        pretium orci nec, fringilla tortor. Pellentesque nec sem eget orci tristique dignissim dapibus vel lorem.
        Donec mattis elit ac nibh varius accumsan. Vestibulum venenatis nec odio ac porta.
      </Text>

      <Text>
        Aliquam vitae ultrices augue. Sed malesuada, urna sit amet luctus sollicitudin, purus purus volutpat ex,
        a viverra dui orci et urna. Integer sed nisi faucibus, venenatis erat sit amet, gravida ex.
        Aliquam in magna eget leo sagittis ultrices. Morbi molestie maximus ipsum. Etiam ipsum purus,
        efficitur in iaculis vitae, aliquet ut ligula. In tempus nisl sit amet nisi eleifend, id placerat est iaculis.
      </Text>

      <Text>
        Fusce condimentum tellus molestie leo condimentum ultrices. Etiam venenatis, nulla sagittis pulvinar facilisis,
        nulla ligula rhoncus dolor, eget pellentesque ex tellus non tellus. Fusce a quam dictum, tempus lacus nec,
        sodales lacus. Praesent lobortis, ex euismod lobortis aliquet, nisi quam aliquet lectus,
        at placerat augue metus at ligula. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Etiam suscipit fringilla ligula vitae gravida.
        Ut sodales tempus tellus porttitor lobortis. Maecenas sed turpis quam.
      </Text>
    </Container>
  </>
);

export default IndexPage;
