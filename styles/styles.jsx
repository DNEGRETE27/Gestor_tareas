import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f4f4f4',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
});
