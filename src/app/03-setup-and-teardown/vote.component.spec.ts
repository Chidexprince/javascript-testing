import { VoteComponent } from './vote.component';

let voteComponent: VoteComponent;

// Arrange
beforeEach(() => {
  voteComponent = new VoteComponent();
});


describe('VoteComponent', () => {
  it('should increment the total votes by 1', () => {
    // Act
    voteComponent.upVote();

    // Assert
    expect(voteComponent.totalVotes).toBe(1);
  });

  it('should decrement the total votes by 1', () => {
    // Act
    voteComponent.downVote();

    // Assert
    expect(voteComponent.totalVotes).toBe(-1);
  });

});
