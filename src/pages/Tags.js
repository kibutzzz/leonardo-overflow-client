import React, { useEffect } from 'react';
import Container from '../components/general/styles/Container';
import TagGrid from '../components/TagGrid';
import { useDispatch } from 'react-redux';
import { Creators as tagsApiActions } from '../store/sagas/tags';

const Tags = () => {
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(tagsApiActions.apiLoadTags())
  }, [dispatch]);

  return <Container>
    <TagGrid />
  </Container>
}

export default Tags;