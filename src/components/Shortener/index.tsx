/* eslint-disable camelcase */
import React, { FormEvent, useState } from 'react'
import { Container } from '../../styles/components/shortener'
import axios from 'axios'
import { useDispatch } from 'react-redux'

const Shortener: React.FC = () => {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const shorten = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      axios
        .post(`https://api.shrtco.de/v2/shorten?url=${url}`)
        .then(response => {
          console.log(response.data.result.short_link)
          const payload = {
            original: response.data.result.original_link,
            short: response.data.result.short_link
          }
          dispatch({ type: 'ADD_LINK', payload: payload })
        })
      setLoading(false)
      setUrl('')
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }
  return (
    <Container>
      <form onSubmit={shorten}>
        <input
          type="text"
          placeholder="Shorten a link here..."
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          Shorten It!
        </button>
      </form>
    </Container>
  )
}

export default Shortener
