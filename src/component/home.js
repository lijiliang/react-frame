import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {getData, postData} from '../utils/fetchData';

class Home extends React.Component {
    componentDidMount () {
        console.log('mount');
        const data = {
            act: 'index',
            op: 'cartype',
            brand_id: 34,
            tuan_id: 492,
            client: 'h5'
        };
        //获取服务器的参数，并且返回一个异步的dispatch，dispatch的对象是自己定义的action
        // const getNav = () => async () => {
        //     console.log('asf')
        //     try {
        //         let response = await getData(`index.php`, data)
        //         await dispatch(receiveNav(response.data))
        //     } catch (error) {
        //         await dispatch(receiveNav(nav))
        //         console.log('error: ', error)
        //     }
        // }

        /*
        async function myFunction(){
            try{
                const response = await getData(`http://api.didadi.fm/index.php`, data);
                await response;
                console.log(response)
            }catch(err){
                console.log(err);
            }
        }
        myFunction();
        */

        /*
        const getIndex = async () => {
            try{
                const response = await getData(`http://api.didadi.fm/index.php`, data);
                await response;
                console.log(response);
            }catch(err){
                console.log(err);
            }
        }
        getIndex();
        */
        const ledata = {
            ti: 1,
            ft: 'Category'
        }
        const getIndex = async () => {
            try{
                const response = await getData(`http://localhost:9090/api/bookzw/catalog`);
                await response;
                console.log(response);
            }catch(err){
                console.log(err);
            }
        }
        getIndex();
    }

    componentWillUnmount () {
        console.log('un mount');
    }
    render(){
        return(
            <div className="home">
                <div><h2>this is home!</h2></div>
            </div>
        );
    }
}

export default Home;
