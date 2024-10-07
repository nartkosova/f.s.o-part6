import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createAnecdote } from '../requests';

const AnecdoteForm = () => {
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries(['anecdotes']);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (content.length < 5) {
      alert('Anecdote must be at least 5 characters long.');
      return;
    }

    const newAnecdote = {
      content,
      votes: 0,
    };

    newAnecdoteMutation.mutate(newAnecdote);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter anecdote here..."
      />
      <button type="submit" disabled={newAnecdoteMutation.isLoading}>
        {newAnecdoteMutation.isLoading ? 'Creating...' : 'Create'}
      </button>
    </form>
  );
};

export default AnecdoteForm;
