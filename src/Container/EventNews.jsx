import { render } from '@testing-library/react'
import React from 'react'
import {Link} from 'react-router-dom'
import data from '../json/data.json'


export default class EventNews extends React.Component{

    constructor(props){
        super(props)
        var c = data['posts']
        var allPost = []
        for(var i in c) {
            allPost.push(c[i]);
        }
        for(var i=0; i<allPost.length; i++){
            if(i<2) allPost[i]["isNew"] = true
            else allPost[i]["isNew"] = false
        }

        var t = data['tags']
        var tags = []
        for(var i in t) tags.push(t[i]);

        var sortedPost = tags.map( e => {
            return allPost.filter( d => {
                console.log(d)
                return d.tag === e 
            })
        })

        this.state = {
            allPost: allPost,
            sortedPost: sortedPost,
            tags: tags
        }
    }
    
    render(){
        return(
            <div className='sub-wrapper'>
                <h1>Event and News</h1>
                {
                    this.state.tags.map( (e, id) => <EventTypes tag={e} posts={this.state.sortedPost[id]} /> )
                }
            </div>
        )
    }
}

function EventTypes(props) {
    return(
        <div className="eventnews-type">
            <h3>{props.tag}</h3>
            {
                props.posts.map( (e, id) =>  <EventTitle data={e} id={id} isNew={e.isNew} />)
            }
        </div>
    )
}

function EventTitle(props) {
    console.log(props)
    return(
        <div className='eventnews'>
            <Link to={`/${props.data["id"]}`}>
                <span className='eventnews-date'> {props.data["date"]} </span>
                {props.isNew? <NewTag />:''}
                <span className='eventnews-title'> {props.data["title"]} </span>
            </Link>
        </div>
    )
}

function NewTag(props) {
    return(
        <span className="newtag">
            new
        </span>
    )
}