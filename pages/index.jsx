import React from 'react';
import { Container } from 'theme-ui';
import Head from '../components/Head';
import Header from '../components/Header';
import Text from '../components/Text';

const IndexPage = () => (
  <>
    <Head title="Home" />
    <Header />
    <Container>
      <Text>
        {/* TODO: actually make this break properly (but look normal for screenreaders) */}
        <Text as="span" variant="subheadline">Hello! My name is <Text as="span" variant="gradient">Dalton Craven</Text>, and I'm a student at the University of South Carolina.</Text>
        as a sanity check, here is some more about me:
      </Text>

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
