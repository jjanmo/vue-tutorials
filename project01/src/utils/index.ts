export const select = <T extends { id: string }>(array: T[], total: number) => {
  const result: T[] = [];

  while (result.length < total) {
    const selectedIndex = Math.floor(Math.random() * array.length);
    const isAlreadySelected = result.find((item) => item.id === array[selectedIndex].id);
    if (!isAlreadySelected) result.push(array[selectedIndex]);
  }

  return result;
};

/** TODO 셔플 로직 변경 - 좀 더 효율적이게!! */
export const shuffle = <T extends { id: string }>(array: T[]) => {
  const result: T[] = [];
  const total = array.length;
  let currentIdx = 0; // 현재 idx

  while (result.length < total) {
    const selectedIdx = Math.floor(Math.random() * total); // 넣을 아이템 idx

    const alreadySelected = result.find((item) => item.id === array[selectedIdx].id); // 이미 뽑은 아이템
    const isSame = selectedIdx === currentIdx; // 같은 위치

    if (currentIdx === total - 1 && !alreadySelected) result.push(array[selectedIdx]);
    else {
      if (!isSame && !alreadySelected) {
        result.push(array[selectedIdx]);
        currentIdx++;
      }
    }
  }

  return result;
};
