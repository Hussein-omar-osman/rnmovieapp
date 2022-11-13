import {
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {getPopularTv, getTVTypeData} from '../services/apiService';
import SlideShow from '../components/SlideShow';
import TypeSwitcher from '../components/TypeSwitcher';

const Tvs = ({type, setType}) => {
  const [tvImages, setTvImages] = useState([]);
  const [nowPlayingTV, setNowPlayingTV] = useState([]);
  const [pupularTV, setPupularTV] = useState([]);
  const [topRatedTV, setTopRatedTV] = useState([]);
  const [latestTV, setTatestTV] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTVData = useCallback(async () => {
    setLoading(true);
    try {
      const pupularTVData = await getTVTypeData('popular');
      const nowPlayingTVData = await getTVTypeData('on_the_air');
      const topRatedTVData = await getTVTypeData('top_rated');
      const latestTVData = await getTVTypeData('latest');
      let tvList = [];
      pupularTVData.forEach(tv =>
        tvList.push({
          id: tv.id,
          title: tv.original_name,
          imgUrl: `https://image.tmdb.org/t/p/w500${tv.poster_path}`,
        }),
      );
      setTvImages(tvList);
      setPupularTV(pupularTVData);
      setNowPlayingTV(nowPlayingTVData);
      setTopRatedTV(topRatedTVData);
      setTatestTV(latestTVData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    getPopularTv()
      .then(shows => {
        let tvList = [];
        shows.forEach(tv =>
          tvList.push({
            id: tv.id,
            title: tv.original_name,
            imgUrl: `https://image.tmdb.org/t/p/w500${tv.poster_path}`,
          }),
        );
        setTvImages(tvList);
        setLoading(false);
      })
      .catch(e => {
        console.error(e);
        setLoading(false);
      });
  }, []);
  return (
    <ScrollView>
      <SlideShow
        listImages={tvImages}
        loading={loading}
        setLoading={setLoading}
      />
      <SafeAreaView>
        <TypeSwitcher type={type} setType={setType} />
        <Text style={{color: 'white'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          aspernatur animi molestiae perspiciatis nobis facere accusamus, veniam
          nemo at aperiam inventore minus omnis facilis hic ex possimus nisi
          cupiditate! Nisi impedit magnam harum accusamus porro amet deleniti
          quae ut delectus architecto minima odio similique alias itaque,
          exercitationem laborum ea illo quas earum consectetur quod, autem
          expedita? At, ab, dolorum veritatis adipisci ipsa delectus sunt
          numquam fugit inventore, optio eum sint nihil nam cumque soluta
          mollitia iusto enim obcaecati fugiat hic nisi minus impedit quos.
          Quas, a. Nulla est incidunt nemo eius quis harum consequatur illum
          voluptate, similique fuga at esse voluptatum. Quidem consequuntur
          dolorum velit quo rem possimus reprehenderit ducimus porro, inventore,
          amet a, non ipsa nisi esse harum optio. Culpa eius dolorem
          consequuntur dolores excepturi, facere quam accusantium optio, earum
          error asperiores eaque quod exercitationem? Earum, omnis. Fuga
          repellat nulla sequi unde et eum ad totam! Excepturi ullam ex ut quo,
          consequuntur porro optio iure quisquam eligendi dolore facilis libero
          sapiente voluptatibus quasi repellat reprehenderit nam magnam ab
          itaque quos, unde at veniam quod nulla. Dolor dignissimos ut quas
          excepturi ipsam magnam eum reprehenderit cupiditate corporis dicta
          porro saepe error velit illo officia voluptate, eius quaerat corrupti
          soluta odit? Voluptatibus nostrum sunt maiores doloremque, soluta
          ipsam ab. Illum porro modi ad ipsam quidem eos maiores. Earum tenetur
          exercitationem tempora, quam facere expedita nostrum consectetur
          maxime iure explicabo harum nobis recusandae, aperiam quaerat?
          Voluptate officia non, perferendis nisi odit dolores et magnam
          voluptatum eum, ipsam veniam quaerat, earum ducimus amet? Ea
          repellendus porro reprehenderit quo laboriosam culpa, numquam
          consectetur veniam error quis laborum quibusdam doloremque illum ab
          natus magni exercitationem nostrum quae vero voluptatem minima
          obcaecati? Delectus doloribus consequuntur asperiores aut, voluptatem
          quidem quibusdam magnam. Alias, minus. Dolores, sapiente veniam culpa,
          assumenda numquam, laborum reiciendis quis aperiam consectetur cum
          explicabo doloribus. Alias, nihil. At corporis similique mollitia
          nobis, nulla nostrum placeat numquam sapiente sed libero aliquam
          nesciunt, expedita eligendi, et modi? Quia, asperiores consequatur
          deleniti officiis voluptatum voluptatem molestias voluptatibus minima
          nemo debitis nihil, fuga ipsam magnam accusantium, accusamus
          temporibus sequi fugiat delectus at consequuntur omnis ullam ipsa ad!
          Provident, sed consequatur corrupti doloremque, quisquam quidem ullam,
          voluptatibus dignissimos eius id recusandae exercitationem. Fuga
          tempore sint enim asperiores quidem voluptates reprehenderit autem
          facilis. Ipsum, voluptatem! Pariatur necessitatibus dignissimos
          quibusdam deleniti illum doloremque iusto excepturi, voluptatibus
          sapiente error autem tempore neque sequi quo debitis quod animi
          quaerat voluptate omnis temporibus optio? Non incidunt cum voluptatum
          nihil molestiae quibusdam, animi inventore delectus. Recusandae
          tenetur dolore quos ut laudantium et modi quas inventore. Sed itaque,
          laboriosam eum exercitationem adipisci necessitatibus eius quas
          incidunt sint assumenda doloremque nulla dolor quam excepturi delectus
          magni consequatur ullam a dolorem voluptates aliquid doloribus
          nostrum! Est quidem dolores omnis odio. Ab autem optio harum
          laboriosam numquam est doloremque ea. Aspernatur error, inventore
          accusantium a distinctio, quis mollitia laudantium nobis placeat fuga
          recusandae! Totam eligendi atque amet iste quo, doloremque corrupti
          iusto dignissimos molestiae hic ea voluptatum blanditiis ab, fugit
          cupiditate ullam fugiat eius voluptate asperiores. Consectetur, qui
          soluta. Facere omnis architecto placeat quaerat perferendis, nihil
          aperiam nulla, officia doloremque earum, quae itaque quos. Error quae
          velit pariatur, iusto perspiciatis sequi incidunt obcaecati sint
          voluptas quisquam excepturi eos, a ab magni! Quae aliquid fugiat harum
          in nesciunt quo sequi consequuntur repudiandae porro perferendis,
          delectus reiciendis soluta, cupiditate itaque nobis. Sit maxime
          reiciendis quod, necessitatibus enim voluptate nam illum soluta ullam
          vitae, atque ipsum. Maxime asperiores cum maiores ipsam suscipit
          molestiae magni voluptate dicta explicabo minima ducimus
          exercitationem commodi, accusantium cumque dolores fugiat autem
          sapiente aliquam quis, deserunt illo repudiandae! Quod numquam unde
          quam officia at modi animi inventore assumenda veniam, alias, a minus
          magni sapiente in aliquid, eos dolor quae rem tempore iste temporibus
          sed? Blanditiis distinctio porro eveniet quam praesentium beatae
          necessitatibus quisquam ex quos, quidem similique incidunt ipsum
          aperiam voluptas repellat omnis magnam vero dignissimos. Et
          consequuntur culpa qui harum sit. Quia saepe consectetur inventore,
          nisi repudiandae accusantium quaerat blanditiis atque eaque molestiae
          laboriosam, fugit consequatur amet nobis error aut, fugiat ipsam velit
          cumque libero maxime deserunt? Cumque ratione delectus nemo numquam
          non, iusto laudantium repellat doloremque maiores atque adipisci,
          tenetur dolorum itaque cupiditate incidunt dolores qui modi veniam
          illum! Unde illum asperiores eligendi earum necessitatibus eveniet
          tenetur iste vitae itaque adipisci dicta neque reprehenderit nostrum,
          amet numquam ullam nam eaque. Officiis ut voluptate aspernatur impedit
          non atque quibusdam blanditiis reprehenderit similique illum ex omnis
          fugit sunt doloribus error laborum quam earum id, fugiat numquam
          voluptatum expedita dicta quia. Illum voluptatem esse nemo expedita
          quo blanditiis facilis nisi distinctio consequatur? Dolorem
          accusantium mollitia nobis ipsum soluta suscipit quia ea, ipsam facere
          architecto consectetur enim maxime vitae eaque sequi dolorum maiores
          nisi odio possimus nesciunt sunt similique. Ipsam, voluptates cumque.
          Adipisci porro tempora nemo sed accusantium natus et reiciendis nihil
          maiores nisi deleniti corrupti vitae libero magnam, vel ipsum quo?
          Quia iure ea magnam in alias totam enim ipsa asperiores. Veniam
          explicabo maxime, voluptas enim nobis debitis, tempore neque iste
          pariatur quisquam asperiores repellat consequuntur voluptatibus?
          Voluptatem, hic ipsum quibusdam molestias dolor maxime. Ratione, qui
          sapiente doloremque dolorem voluptas sint rem optio voluptate maxime
          repudiandae quibusdam repellat consequatur tempore aliquam,
          reprehenderit quae aperiam velit explicabo pariatur obcaecati
          distinctio unde ipsam veniam! Dolorum quod expedita, libero voluptas
          laborum similique eligendi optio fugit. Omnis illum praesentium
          consequuntur, adipisci veniam quo fugit quae, error saepe illo ex?
          Consequuntur, accusamus quos. Cupiditate laudantium dolore nostrum
          veniam beatae, maxime nobis molestiae numquam soluta iste rerum
          asperiores minima? Consectetur, voluptatibus rem, illo animi eius unde
          repellat qui reiciendis praesentium doloremque maiores deserunt,
          beatae nam temporibus. Optio quis, delectus fuga necessitatibus
          reprehenderit quam amet ad voluptatem distinctio maiores laboriosam
          sapiente iusto voluptatibus ex hic, consectetur, vero vel quod! Animi
          adipisci dicta itaque ad architecto, recusandae excepturi blanditiis
          ex, repellat totam expedita nobis, labore suscipit. Quae commodi
          tenetur nam accusantium quisquam dignissimos veritatis unde? Commodi
          exercitationem nesciunt amet cupiditate inventore unde sequi repellat
          adipisci fugit dolorem, minima praesentium delectus eligendi at quod
          fugiat expedita hic harum id impedit autem molestiae fuga tempora!
          Itaque sapiente suscipit quod!
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Tvs;
