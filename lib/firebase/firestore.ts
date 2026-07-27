import {
  collection,
  doc,
  type DocumentData,
  type Firestore,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  type QueryConstraint,
} from "firebase/firestore";

import { getFirebaseApp } from "./config";

export function getFirebaseFirestore(): Firestore | null {
  const app = getFirebaseApp();
  return app ? getFirestore(app) : null;
}

export async function getDocument<T extends DocumentData>(
  collectionName: string,
  documentId: string,
): Promise<T | null> {
  const db = getFirebaseFirestore();
  if (!db) return null;

  const snapshot = await getDoc(doc(db, collectionName, documentId));
  return snapshot.exists() ? (snapshot.data() as T) : null;
}

export async function getCollection<T extends DocumentData>(
  collectionName: string,
  ...constraints: QueryConstraint[]
): Promise<T[]> {
  const db = getFirebaseFirestore();
  if (!db) return [];

  const q = query(collection(db, collectionName), ...constraints);
  const snapshot = await getDocs(q);
  return snapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() }) as unknown as T,
  );
}

export { collection, doc, getDoc, getDocs, limit, orderBy, query };
