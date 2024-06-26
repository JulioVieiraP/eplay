import { useState } from 'react'

import Section from '../Section'

import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import closeIcon from '../../assets/images/fechar.png'

import * as S from './style'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }
  return (
    <>
      <Section title="Galeria" background="black">
        <S.items>
          {items.map((item, index) => (
            <S.item
              key={index}
              onClick={() => {
                setModal({
                  isVisible: true,
                  url: item.url,
                  type: item.type
                })
              }}
            >
              <img
                src={getMediaCover(item)}
                alt={`Midia ${index + 1} de ${name}`}
              />
              <S.Action>
                <img src={getMediaIcon(item)} alt="Clique para abrir a mídia" />
              </S.Action>
            </S.item>
          ))}
        </S.items>
      </Section>
      {modal.isVisible && (
        <S.Modal>
          <S.ModalContent className="Container">
            <header>
              <h4>{name}</h4>
              <img onClick={closeModal} src={closeIcon} alt="" />
            </header>
            {modal.type === 'image' ? (
              <img src={modal.url} alt="" />
            ) : (
              <iframe src={modal.url} />
            )}
          </S.ModalContent>
          <div className="overlay" onClick={closeModal}></div>
        </S.Modal>
      )}
    </>
  )
}

export default Gallery
